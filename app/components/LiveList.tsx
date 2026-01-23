import Link from "next/link";
import React from "react";
import { SheetItem } from "@/utils/googleSheets";

type LiveListProps = {
  liveData: SheetItem[];
  limit?: number; // 表示件数の制限（オプション）
  showViewAllButton?: boolean; // 「全てのライブスケジュール」ボタンを表示するかどうか
};

export const LiveList: React.FC<LiveListProps> = ({
  liveData,
  limit,
  showViewAllButton = false,
}) => {
  // ライブデータを日時で昇順にソート（未来のライブが先に来るように）
  const sortedLiveData = [...liveData].sort((a, b) => {
    // 日時の値が存在するか確認し、存在しない場合は空文字列をデフォルト値として使用
    const dateStrA = typeof a["日時"] === "string" ? a["日時"] : "";
    const dateStrB = typeof b["日時"] === "string" ? b["日時"] : "";

    const dateA = new Date(dateStrA);
    const dateB = new Date(dateStrB);

    // 日付が無効な場合は比較しない
    if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
      return 0;
    }

    return dateA.getTime() - dateB.getTime(); // 未来のライブが先に来るように昇順でソート
  });

  // 表示するライブデータ（limit指定がある場合は制限する）
  const displayLiveData = limit
    ? sortedLiveData.slice(0, limit)
    : sortedLiveData;

  return (
    <section id="live" className="cinema-theater-section mb-12">
      {/* <div className="cinema-stage">
        <h2 className="cinema-stage-title">LIVE</h2>
        <div className="cinema-curtain-left"></div>
        <div className="cinema-curtain-right"></div>
      </div> */}

      <div className="cinema-seating-area mb-12">
        {displayLiveData.map((live, index) => (
          <div key={index} className="cinema-seat cinema-live-seat">
            <div className="cinema-seat-inner">
              <div className="cinema-seat-back">
                <div className="cinema-seat-number">Live {index + 1}</div>
              </div>
              <div className="cinema-seat-content">
                <h3 className="text-xl font-bold mb-3 cinema-title">
                  {typeof live["ライブ名"] === "string" ? live["ライブ名"] : ""}
                </h3>

                <div className="cinema-details">
                  <div className="cinema-detail-item">
                    <span className="cinema-detail-label">日時</span>
                    <span className="cinema-detail-value">
                      {typeof live["日時"] === "string" ? live["日時"] : ""}
                    </span>
                  </div>

                  <div className="cinema-detail-item">
                    <span className="cinema-detail-label">場所</span>
                    <span className="cinema-detail-value">
                      {typeof live["場所"] === "string" ? live["場所"] : ""}
                    </span>
                  </div>

                  <div className="cinema-detail-item">
                    <span className="cinema-detail-label">チケット</span>
                    <span className="cinema-detail-value">
                      {typeof live["チケット代"] === "string"
                        ? live["チケット代"]
                        : ""}
                    </span>
                  </div>

                  <div className="cinema-detail-item">
                    <span className="cinema-detail-label">販売状況</span>
                    <span className="cinema-detail-value">
                      {typeof live["販売状況"] === "string"
                        ? live["販売状況"]
                        : ""}
                    </span>
                  </div>
                </div>

                <span className="cinema-detail-label">詳細</span>
                {live["説明"] && typeof live["説明"] === "string" && (
                  <div className="mt-4 cinema-description">
                    <p className="text-sm whitespace-pre-line">
                      {live["説明"]}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
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
          <Link href="/live" className="btn-endroll">
            全てのライブスケジュール
          </Link>
        </div>
      )}
    </section>
  );
};
