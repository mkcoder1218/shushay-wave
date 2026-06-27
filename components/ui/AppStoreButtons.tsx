interface AppStoreButtonsProps {
  className?: string;
}

export default function AppStoreButtons({ className }: AppStoreButtonsProps) {
  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      <img
        src="/imgs/google-play-download.png"
        alt="google-play-download"
        className="cursor-pointer max-w-[120px] h-auto lg:max-w-none"
      />

      <img
        src="/imgs/app-store-download.png"
        alt="app-store-download"
        className="cursor-pointer max-w-[120px] h-auto lg:max-w-none"
      />
    </div>
  );
}
