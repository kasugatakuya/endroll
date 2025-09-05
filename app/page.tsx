import React from "react";
import { getAllSpreadsheetsData, SheetItem } from "@/utils/googleSheets";
import Footer from "@/app/components/Footer";

// キャッシュを無効化し、毎回のリクエストで再検証
export const revalidate = 0;

// サーバーコンポーネントでのデータ取得
async function getSheetData() {
  try {
    return await getAllSpreadsheetsData();
  } catch (error) {
    console.error("データ取得エラー:", error);
    return [] as SheetItem[];
  }
}

export default async function Top() {
  // 全てのスプレッドシートのデータを取得
  const allData = await getSheetData();

  // データをタイプで分類
  const newsData = allData
    .filter((item) => item._sheetType === "news")
    .slice(0, 3);
  const liveData = allData
    .filter((item) => item._sheetType === "live")
    .slice(0, 3);
  const memberData = allData.filter((item) => item._sheetType === "member");
  const musicData = allData
    .filter((item) => item._sheetType === "music")
    .slice(0, 3);

  // エンドロールコンテンツを作成
  const EndrollContent = () => (
    <>
      {/* タイトルセクション */}
      <div className="endroll-section">
        <div className="endroll-title">Endroll</div>
        <div className="endroll-subtitle">物語の終わりと始まり</div>
        <div className="endroll-description">ロックバンド</div>
      </div>

      {/* 楽曲セクション */}
      {musicData.length > 0 && (
        <div className="endroll-section">
          <div className="endroll-category-title">MUSIC</div>
          {musicData.map((item, index) => (
            <div key={index} className="endroll-item">
              <div className="endroll-item-title">
                {item.title || item.name}
              </div>
              <div className="endroll-item-desc">
                {item.description || item.date}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ライブ情報セクション */}
      {liveData.length > 0 && (
        <div className="endroll-section">
          <div className="endroll-category-title">LIVE</div>
          {liveData.map((item, index) => (
            <div key={index} className="endroll-item">
              <div className="endroll-item-title">
                {item.title || item.venue}
              </div>
              <div className="endroll-item-desc">{item.date}</div>
            </div>
          ))}
        </div>
      )}

      {/* ニュースセクション */}
      {newsData.length > 0 && (
        <div className="endroll-section">
          <div className="endroll-category-title">NEWS</div>
          {newsData.map((item, index) => (
            <div key={index} className="endroll-item">
              <div className="endroll-item-title">{item.title}</div>
              <div className="endroll-item-desc">{item.date}</div>
            </div>
          ))}
        </div>
      )}

      {/* メンバー紹介セクション */}
      {memberData.length > 0 && (
        <div className="endroll-section">
          <div className="endroll-category-title">CAST</div>
          {memberData.map((item, index) => (
            <div key={index} className="endroll-item">
              <div className="endroll-item-title">{item.name}</div>
              <div className="endroll-item-desc">
                {item.instrument || item.role}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* クレジット風の最終セクション */}
      <div className="endroll-section endroll-final">
        <div className="endroll-category-title">Special Thanks</div>
        <div className="endroll-item">
          <div className="endroll-item-desc">すべてのファンの皆様へ</div>
        </div>
        <div className="endroll-item">
          <div className="endroll-item-desc">音楽を愛するすべての人々へ</div>
        </div>
        <div className="endroll-spacer"></div>
        <div className="endroll-copyright">
          © 2024 Endroll. All rights reserved.
        </div>
        <div className="endroll-spacer"></div>
        <div className="endroll-final-message">この物語はまだ終わらない...</div>
      </div>

      {/* エンドロールが終わった後の余白 */}
      <div className="endroll-spacer-large"></div>
    </>
  );

  return (
    <>
      <div className="endroll-container">
        {/* 映画のエンドロール風背景 */}
        <div className="endroll-background"></div>

        {/* メインコンテンツ - 2つの同じコンテンツを連続で配置してシームレスループを実現 */}
        <div className="endroll-wrapper">
          <div className="endroll-content-loop">
            <EndrollContent />
          </div>
          <div className="endroll-content-loop">
            <EndrollContent />
          </div>
        </div>
      </div>

      {/* フッターを別途配置して距離を一定に保つ */}
      <Footer />
    </>
  );
}
