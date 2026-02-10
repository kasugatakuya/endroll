import React from "react";

import { getAllSpreadsheetsData, SheetItem } from "@/utils/googleSheets";
import { TitleSection } from "@/app/components/TitleSection";
import { MusicList } from "@/app/components/MusicList";
import UpButton from "@/app/components/UpButton";

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

export default async function Music() {
  // 全てのスプレッドシートのデータを取得
  const allData = await getSheetData();

  // データをタイプで分類
  const musicData = allData.filter((item) => item._sheetType === "music");

  return (
    <main className="mx-5 md:mx-20">
      {/* タイトルセクション */}
      <TitleSection
        title="MUSIC"
        subtitle="楽曲情報"
        backToTopButton={true} // TOPに戻るボタンを表示
      />

      {/* ライブ動画セクション */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">LIVE</h2>
        <div className="max-w-2xl mx-auto">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/QXioQBF0kx8"
              title="ENDROLL Live"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-6 text-center">
            <p className="text-lg font-bold">2026年2月1日(日)</p>
            <p className="mb-3">下北沢 BASEMENTBAR</p>
            <div className="mb-3">
              <p className="text-sm text-gray-400 mb-1">ACT</p>
              <p>Rock&apos;n&apos;Roll Party People</p>
              <p>Endroll</p>
              <p>まつりのはなを買いに行く</p>
            </div>
            <div className="text-sm">
              <p>OPEN 12:00 / START 12:30</p>
              <p>ADV ¥2,000- / DOOR ¥2,500-(+1Drink ¥600-)</p>
            </div>
          </div>
        </div>
      </section>

      {/* 楽曲セクションとアルバム - MusicListコンポーネントを使用 */}
      {musicData.length > 0 && (
        <MusicList
          musicData={musicData}
          showViewAllButton={false} // 「全ての楽曲」ボタンを非表示
        />
      )}
      <UpButton />
    </main>
  );
}
