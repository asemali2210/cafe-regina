import LogoLoader from "../components/shared/Loader/LogoLoader";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm">
      <LogoLoader />
    </div>
  );
}
