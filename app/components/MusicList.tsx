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
        <section className="cinema-theater-section mb-12">
          <div id="music" className="cinema-music-container">
            {/* <div className="cinema-stage">
              <h2 className="cinema-stage-title">MUSIC</h2>
              <div className="cinema-curtain-left"></div>
              <div className="cinema-curtain-right"></div>
            </div> */}

            <div className="cinema-seating-area">
              {displayedMusic.map((music, index) => (
                <div key={index} className="cinema-seat cinema-music-seat">
                  <div className="cinema-seat-inner">
                    <div className="cinema-seat-back">
                      <div className="cinema-seat-number">
                        Track {index + 1}
                      </div>
                    </div>
                    <div className="cinema-seat-content">
                      <h3 className="text-xl font-bold mb-3 cinema-title">
                        {music["曲名"]}
                      </h3>

                      {music["音源URL"] && (
                        <div className="mb-3 cinema-music-player">
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
                                  )}&color=%23d4af37&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`
                                : (music["音源URL"] as string)
                            }
                            className="cinema-iframe"
                          ></iframe>
                        </div>
                      )}

                      {music["説明"] && (
                        <div className="text-sm whitespace-pre-line mt-2 cinema-description">
                          {music["説明"]}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
              <Link href="/music" className="btn-endroll">
                全ての楽曲
              </Link>
            </div>
          )}
        </section>
      )}
    </>
  );
};
