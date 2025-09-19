"use client";

import React, { useEffect, useState, useRef } from "react";
import { SheetItem } from "@/utils/googleSheets";

export default function Top() {
  const [allData, setAllData] = useState<SheetItem[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // データ取得
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/sheets");
        const result = await response.json();
        setAllData(result.success ? result.data : []);
      } catch (error) {
        console.error("データ取得エラー:", error);
        setAllData([]);
      }
    }
    fetchData();
  }, []);

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

  // コンテンツの高さを計算してアニメーションを調整
  useEffect(() => {
    if (contentRef.current && wrapperRef.current && allData.length > 0) {
      // タイマーを使用してDOMが完全にレンダリングされるのを待つ
      setTimeout(() => {
        if (!contentRef.current || !wrapperRef.current) return;

        // 全体の高さを取得（padding含む）
        const totalHeight = contentRef.current.scrollHeight;

        // 1サイクルの高さを計算（2つのコンテンツ + 2つのスペーサー）
        // padding-topの100vhを除外
        const contentHeight = totalHeight - window.innerHeight;
        const singleCycleHeight = contentHeight / 2;

        // アニメーション時間を高さに基づいて計算（ピクセル/秒の速度を一定に）
        const pixelsPerSecond = 250; // スクロール速度
        const duration = singleCycleHeight / pixelsPerSecond;

        // 既存のスタイルを削除
        const existingStyle = document.getElementById(
          "endroll-animation-style"
        );
        if (existingStyle) {
          existingStyle.remove();
        }

        // CSSアニメーションを動的に更新
        const style = document.createElement("style");
        style.id = "endroll-animation-style";
        style.innerHTML = `
          @keyframes endrollDynamic {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-${singleCycleHeight}px);
            }
          }
          .endroll-wrapper-dynamic {
            animation: endrollDynamic ${duration}s linear infinite;
          }
          
          /* 初期位置の調整 */
          .endroll-content-loop {
            transform: translateY(0);
          }
        `;
        document.head.appendChild(style);

        // クラスを追加
        wrapperRef.current.classList.add("endroll-wrapper-dynamic");
      }, 100); // 100msの遅延
    }
  }, [allData]);
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
              <div className="endroll-item-title">{item.曲名}</div>
              <div className="endroll-item-desc">{item.説明}</div>
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
              <div className="endroll-item-title">{item.ライブ名}</div>
              <div className="endroll-item-desc">{item.日時}</div>
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
              <div className="endroll-item-title">{item.タイトル}</div>
              <div className="endroll-item-desc">{item.日付}</div>
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
              <div className="endroll-item-title">{item.名前}</div>
              <div className="endroll-item-desc">{item.担当}</div>
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
          © 2025 Endroll. All rights reserved.
        </div>
        <div className="endroll-spacer"></div>
        <div className="endroll-final-message">この物語はまだ終わらない...</div>
      </div>

      {/* エンドロールが終わった後の余白 */}
      <div className="endroll-spacer-large"></div>

      {/* 次のループまでの間隔を短縮 */}
      <div style={{ height: "80vh" }}></div>
    </>
  );

  return (
    <div className="endroll-container">
      {/* 映画のエンドロール風背景 */}
      <div className="endroll-background"></div>

      {/* メインコンテンツ - 無限ループエンドロール */}
      <div ref={wrapperRef} className="endroll-wrapper">
        <div
          ref={contentRef}
          className="endroll-content-loop"
          style={{ height: "auto", paddingTop: "100vh" }}
        >
          <EndrollContent />
          <div style={{ height: "100vh" }}></div>
          <EndrollContent />
          <div style={{ height: "100vh" }}></div>
        </div>
      </div>
    </div>
  );
}
