"use client";
import Image from "next/image";

export default function LogoLoader({ className = "" }) {
  const containerClassName = [
    "flex flex-col items-center gap-6 text-white",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerClassName}>
      <Image
        src="/images/logo.svg"
        alt="CafAc Regina logo"
        width={180}
        height={120}
        priority
        className="logo-loader__logo"
      />

      <div className="logo-loader__progress">
        <span className="logo-loader__progress-bar" />
      </div>

      <p className="text-xs uppercase tracking-[0.35em] text-white/70">
        Loading
      </p>

      <style jsx>{`
        .logo-loader__logo {
          max-width: 12rem;
          width: 100%;
          animation: logoLoaderPulse 2.4s ease-in-out infinite;
        }

        .logo-loader__progress {
          width: 8rem;
          height: 0.35rem;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.25);
          overflow: hidden;
        }

        .logo-loader__progress-bar {
          display: block;
          width: 100%;
          height: 100%;
          background: #ffffff;
          transform-origin: left center;
          animation: logoLoaderProgress 1.6s ease-in-out infinite;
        }

        @keyframes logoLoaderPulse {
          0% {
            opacity: 0.3;
            transform: scale(0.95);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0.3;
            transform: scale(0.95);
          }
        }

        @keyframes logoLoaderProgress {
          0% {
            transform: scaleX(0);
          }
          45% {
            transform: scaleX(1);
            transform-origin: left center;
          }
          55% {
            transform: scaleX(1);
            transform-origin: right center;
          }
          100% {
            transform: scaleX(0);
            transform-origin: right center;
          }
        }
      `}</style>
    </div>
  );
}
