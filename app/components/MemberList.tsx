import React from "react";
import { SheetItem } from "@/utils/googleSheets";
// Image コンポーネントが必要な場合にコメント解除
import Image from "next/image";

// MemberCard のプロパティ定義
interface MemberCardProps {
  member: SheetItem;
  imageSize?: "sm" | "md" | "lg";
  showFullDetails?: boolean;
}

// MemberList のプロパティ定義
interface MemberListProps {
  memberData: SheetItem[];
  title?: string;
}

// MemberCard コンポーネント
export function MemberCard({
  member,
  imageSize = "md",
  showFullDetails = true,
}: MemberCardProps) {
  // サイズに応じたクラス名を生成
  const imageSizeClasses = {
    sm: "w-24 h-24",
    md: "w-28 h-28",
    lg: "w-40 h-40",
  };

  return (
    <div className="cinema-seat cinema-member-seat-full">
      <div className="cinema-seat-inner">
        {/* <div className="cinema-seat-back">
          <div className="cinema-seat-number">{member["担当"]}</div>
        </div> */}
        <div className="cinema-seat-content cinema-member-content-full">
          <div className="cinema-member-layout">
            <div className="cinema-member-image-section">
              <div
                className={`${imageSizeClasses[imageSize]} cinema-screen-effect flex items-center justify-center`}
              >
                {member["画像"] ? (
                  <Image
                    src={`/${member["画像"]}`}
                    width={
                      imageSize === "lg" ? 200 : imageSize === "md" ? 140 : 120
                    }
                    height={
                      imageSize === "lg" ? 200 : imageSize === "md" ? 140 : 120
                    }
                    alt={`${member["名前"]}の写真`}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <span className="text-2xl font-bold cinema-glow">
                    No Image
                  </span>
                )}
              </div>
              <h3 className="text-2xl font-bold cinema-title mt-4">
                {member["名前"]}
              </h3>
              <div className="text-[var(--endroll-gold)] mt-1 cinema-role">
                {member["担当"]}
              </div>
            </div>

            <div className="cinema-member-info-section">
              {member["説明"] && (
                <div className="mb-4 cinema-description">
                  <p className="text-sm whitespace-pre-line">
                    {member["説明"]}
                  </p>
                </div>
              )}

              {showFullDetails && (
                <div className="cinema-details cinema-member-details-grid">
                  {member["使用機材"] && (
                    <div className="cinema-detail-item">
                      <span className="cinema-detail-label">使用機材</span>
                      <span className="cinema-detail-value">
                        {member["使用機材"]}
                      </span>
                    </div>
                  )}

                  {member["好きなアーティスト"] && (
                    <div className="cinema-detail-item">
                      <span className="cinema-detail-label">
                        好きなアーティスト
                      </span>
                      <span className="cinema-detail-value">
                        {member["好きなアーティスト"]}
                      </span>
                    </div>
                  )}

                  {member["好きな食べ物"] && (
                    <div className="cinema-detail-item">
                      <span className="cinema-detail-label">好きな食べ物</span>
                      <span className="cinema-detail-value">
                        {member["好きな食べ物"]}
                      </span>
                    </div>
                  )}

                  {member["好きな場所"] && (
                    <div className="cinema-detail-item">
                      <span className="cinema-detail-label">好きな場所</span>
                      <span className="cinema-detail-value">
                        {member["好きな場所"]}
                      </span>
                    </div>
                  )}

                  {member["趣味"] && (
                    <div className="cinema-detail-item">
                      <span className="cinema-detail-label">趣味</span>
                      <span className="cinema-detail-value">
                        {member["趣味"]}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// MemberList コンポーネント
export function MemberList({
  memberData,
}: // title = "メンバー紹介",
MemberListProps) {
  if (memberData.length === 0) {
    return null;
  }

  return (
    <section id="members" className="cinema-theater-section">
      {/* <div className="cinema-stage">
        <h2 className="cinema-stage-title">{title}</h2>
        <div className="cinema-curtain-left"></div>
        <div className="cinema-curtain-right"></div>
      </div> */}

      <div className="cinema-seating-area cinema-member-seating-full">
        {memberData.map((member, index) => (
          <MemberCard key={index} member={member} />
        ))}
      </div>

      <div className="cinema-floor-lights">
        <div className="cinema-floor-light"></div>
        <div className="cinema-floor-light"></div>
        <div className="cinema-floor-light"></div>
        <div className="cinema-floor-light"></div>
        <div className="cinema-floor-light"></div>
      </div>
    </section>
  );
}

// デフォルトエクスポート（MemberListをデフォルトとして提供）
export default MemberList;
