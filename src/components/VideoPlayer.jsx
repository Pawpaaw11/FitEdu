import { useState, useRef, useEffect } from "react";
import { PlayIcon, VolumeIcon, SettingsIcon, FullscreenIcon } from "./Icons";

// Real HTML5 Video Player for assets/Konten MP4 files
const VideoPlayer = ({ src, title, duration }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);

  // When video source changes, reset player and reload
  useEffect(() => {
    setIsPlaying(false);
    setCurrentTime(0);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.load();
    }
  }, [src]);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setVideoDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    const newTime = (parseFloat(e.target.value) / 100) * (videoDuration || 1);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    const container = videoRef.current.parentElement;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      if (container?.requestFullscreen) {
        container.requestFullscreen();
      } else if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds) || seconds < 0) return "0:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const progress = videoDuration > 0 ? (currentTime / videoDuration) * 100 : 0;

  return (
    <div
      className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-950 group shadow-lg flex flex-col justify-end"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => isPlaying && setShowControls(false)}
    >
      {/* Real HTML5 Video element */}
      <video
        ref={videoRef}
        src={src}
        className="absolute inset-0 w-full h-full object-contain bg-black cursor-pointer"
        onClick={handlePlayPause}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
        playsInline
      />

      {/* Big center play button overlay when paused */}
      {!isPlaying && (
        <button
          aria-label="Play Video"
          onClick={handlePlayPause}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-600/90 hover:bg-blue-600 rounded-full flex items-center justify-center text-white border border-white/20 shadow-2xl transition-all duration-200 hover:scale-110 backdrop-blur-sm z-20 cursor-pointer"
        >
          <PlayIcon className="w-7 h-7 fill-white ml-1" />
        </button>
      )}

      {/* Dark overlay gradient for controls visibility */}
      <div
        className={`absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/85 via-black/40 to-transparent transition-opacity duration-300 pointer-events-none z-10 ${
          showControls || !isPlaying ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Controls Container */}
      <div
        className={`relative z-20 px-4 pb-3 pt-2 transition-opacity duration-300 ${
          showControls || !isPlaying ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Progress Bar (Interactive Scrubber) */}
        <div className="relative mb-2 flex items-center">
          <input
            type="range"
            min="0"
            max="100"
            step="0.1"
            value={progress}
            onChange={handleSeek}
            className="w-full h-1.5 bg-white/30 rounded-lg appearance-none cursor-pointer accent-blue-500 hover:h-2 transition-all"
          />
        </div>

        {/* Bottom Bar: Play/Pause, Time, Title, Controls */}
        <div className="flex items-center justify-between text-white text-xs">
          <div className="flex items-center space-x-3">
            <button
              aria-label="Play/Pause"
              onClick={handlePlayPause}
              className="hover:text-blue-400 focus:outline-none transition-colors cursor-pointer"
            >
              {isPlaying ? (
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              ) : (
                <PlayIcon className="w-4 h-4 fill-white" />
              )}
            </button>
            <span className="font-mono text-white/90 font-medium">
              {formatTime(currentTime)} / {formatTime(videoDuration)}
            </span>
          </div>

          <div className="flex items-center space-x-3 text-white/80">
            {isPlaying && (
              <span className="hidden sm:flex items-center gap-1 text-[10px] text-emerald-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot" />
                Memutar
              </span>
            )}
            <button
              aria-label="Volume"
              onClick={toggleMute}
              className={`hover:text-white transition-colors cursor-pointer ${isMuted ? "text-rose-400" : ""}`}
            >
              <VolumeIcon />
            </button>
            <button
              aria-label="Fullscreen"
              onClick={toggleFullscreen}
              className="hover:text-white transition-colors cursor-pointer"
            >
              <FullscreenIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
