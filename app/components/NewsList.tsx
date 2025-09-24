import Link from "next/link";
import React from "react";
import { SheetItem } from "@/utils/googleSheets";

type NewsListProps = {
  newsData: SheetItem[];
  limit?: number; // 表示件数の制限（オプション）
  showViewAllButton?: boolean; // 「全てのニュース」ボタンを表示するかどうか
};

export const NewsList: React.FC<NewsListProps> = ({
  newsData,
  limit,
  showViewAllButton = false,
}) => {
  // ニュースデータを日付で新しい順にソート
  const sortedNewsData = [...newsData].sort((a, b) => {
    // 日付の値が存在するか確認し、存在しない場合は空文字列をデフォルト値として使用
    const dateStrA = typeof a["日付"] === "string" ? a["日付"] : "";
    const dateStrB = typeof b["日付"] === "string" ? b["日付"] : "";

    const dateA = new Date(dateStrA);
    const dateB = new Date(dateStrB);

    // 日付が無効な場合は比較しない
    if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
      return 0;
    }

    return dateB.getTime() - dateA.getTime();
  });

  // 表示するニュースデータ（limit指定がある場合は制限する）
  const displayNewsData = limit
    ? sortedNewsData.slice(0, limit)
    : sortedNewsData;

  return (
    <section id="news" className="cinema-theater-section mb-12">
      {/* <div className="cinema-stage">
        <h2 className="cinema-stage-title">NEWS</h2>
        <div className="cinema-curtain-left"></div>
        <div className="cinema-curtain-right"></div>
      </div> */}

      <div className="cinema-seating-area cinema-news-seating-full">
        {displayNewsData.map((row, rowIndex) => (
          <article className="cinema-seat cinema-news-seat-full" key={rowIndex}>
            <div className="cinema-seat-inner">
              <div className="cinema-seat-back">
                <div className="cinema-seat-number">{row["日付"]}</div>
              </div>
              <div className="cinema-seat-content cinema-news-content">
                <h3 className="text-2xl font-bold mb-3 cinema-title">
                  {row["タイトル"]}
                </h3>
                <p className="mb-4 whitespace-pre-line cinema-description">
                  {row["内容"]}
                </p>
                {row["リンクURL"] && typeof row["リンクURL"] === "string" && (
                  <Link
                    href={row["リンクURL"]}
                    className="cinema-news-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="cinema-link-icon">▶</span>
                    {typeof row["リンクテキスト"] === "string"
                      ? row["リンクテキスト"]
                      : "詳細を見る"}
                  </Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="cinema-floor-lights">
        <div className="cinema-floor-light"></div>
        <div className="cinema-floor-light"></div>
        <div className="cinema-floor-light"></div>
        <div className="cinema-floor-light"></div>
        <div className="cinema-floor-light"></div>
      </div>

      {showViewAllButton && (
        <div className="text-center mt-8">
          <Link href="/news" className="btn-endroll">
            全てのニュース
          </Link>
        </div>
      )}
    </section>
  );
};
