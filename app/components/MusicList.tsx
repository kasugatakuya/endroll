import Link from "next/link";
import React from "react";
import { SheetItem } from "@/utils/googleSheets";

// MusicListコンポーネントの型定義
interface MusicListProps {
  musicData: SheetItem[];
  limit?: number; // オプショナル: 表示する曲数の制限
  showViewAllButton?: boolean; // オプショナル: 「全ての楽曲」ボタンを表示するかどうか
}

export const MusicList: React.FC<MusicListProps> = ({
  musicData,
  limit,
  showViewAllButton = false,
}) => {
  // limitが指定されている場合、データを制限する
  const displayedMusic = limit ? musicData.slice(0, limit) : musicData;

  return (
    <>
      {/* 楽曲セクション */}
      {displayedMusic.length > 0 && (
        <section className="mb-12">
          <div id="music" className="p-8 scroll-mt-16">
            <h2 className="text-3xl font-bold mb-6 border-b-2 border-accent pb-2">
              楽曲
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {displayedMusic.map((music, index) => (
                <div
                  key={index}
                  className="border-2 border-accent p-4 rounded-lg hover:shadow-lg transition-shadow bg-base-100"
                >
                  <h3 className="text-xl font-bold mb-3">{music["曲名"]}</h3>

                  {music["音源URL"] && (
                    <div className="mb-3">
                      <iframe
                        width="100%"
                        height="120"
                        allow="autoplay"
                        src={
                          // 文字列型としてチェックして処理
                          typeof music["音源URL"] === "string" &&
                          music["音源URL"].includes("soundcloud.com")
                            ? `https://w.soundcloud.com/player/?url=${encodeURIComponent(
                                music["音源URL"] as string
                              )}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`
                            : (music["音源URL"] as string)
                        }
                      ></iframe>
                    </div>
                  )}

                  {music["説明"] && (
                    <div className="text-sm whitespace-pre-line mt-2">
                      {music["説明"]}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {showViewAllButton && (
            <div className="text-center">
              <Link href="/music" className="btn-punk">
                全ての楽曲
              </Link>
            </div>
          )}
        </section>
      )}
    </>
  );
};
