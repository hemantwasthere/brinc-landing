import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export const iconSize = { width: 512, height: 512 };
export const appleIconSize = { width: 180, height: 180 };

export function renderMark(size: number) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#141310",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: `${size * 0.24}px`,
            top: `${size * 0.22}px`,
            width: `${size * 0.15}px`,
            height: `${size * 0.56}px`,
            background: "#ff5a1f",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: `${size * 0.39}px`,
            top: `${size * 0.44}px`,
            width: `${size * 0.29}px`,
            height: `${size * 0.34}px`,
            background: "#ff5a1f",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: `${size * 0.16}px`,
            top: `${size * 0.18}px`,
            width: `${size * 0.14}px`,
            height: `${size * 0.14}px`,
            background: "#ffffff",
          }}
        />
      </div>
    ),
    { width: size, height: size },
  );
}

export function renderOg({
  eyebrow,
  title,
  accent,
  description,
  stats,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  stats: { k: string; v: string }[];
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "#141310",
                display: "flex",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "10px",
                  top: "9px",
                  width: "6px",
                  height: "22px",
                  background: "#ff5a1f",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: "16px",
                  top: "18px",
                  width: "12px",
                  height: "13px",
                  background: "#ff5a1f",
                }}
              />
            </div>
            <div
              style={{
                marginLeft: "14px",
                fontSize: "30px",
                fontWeight: 700,
                letterSpacing: "-1px",
                color: "#141310",
              }}
            >
              brinc
            </div>
          </div>

          <div
            style={{
              fontSize: "18px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#ff5a1f",
            }}
          >
            {eyebrow}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: "76px",
              lineHeight: 1.05,
              letterSpacing: "-3px",
              color: "#141310",
              maxWidth: "1000px",
            }}
          >
            {title}
            <span style={{ color: "#ff5a1f", marginLeft: "16px" }}>{accent}</span>
          </div>

          <div
            style={{
              marginTop: "26px",
              fontSize: "26px",
              lineHeight: 1.45,
              color: "#6f6b63",
              maxWidth: "820px",
            }}
          >
            {description}
          </div>
        </div>

        <div style={{ display: "flex", borderTop: "1px solid #e7e3db", paddingTop: "26px" }}>
          {stats.map((stat) => (
            <div
              key={stat.v}
              style={{ display: "flex", flexDirection: "column", marginRight: "72px" }}
            >
              <div style={{ fontSize: "34px", letterSpacing: "-1px", color: "#141310" }}>
                {stat.k}
              </div>
              <div style={{ marginTop: "6px", fontSize: "19px", color: "#6f6b63" }}>{stat.v}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
