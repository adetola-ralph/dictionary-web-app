import cx from "classnames";
import { useEffect, useRef, useState } from "react";

import { PauseIcon, PlayIcon } from "../../icons";

interface AudioPlayerProps {
  audio: string;
  className?: string;
}
export const AudioPlayer = ({ audio, className }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioPlayRef = useRef<HTMLAudioElement>(null);

  const endedEventListener = () => {
    setIsPlaying(false);
  };

  const onAudioPlayCick = () => {
    setIsPlaying((prevIsPlaying) => {
      return !prevIsPlaying;
    });
  };

  useEffect(() => {
    if (isPlaying) {
      audioPlayRef.current?.play();
    } else {
      audioPlayRef.current?.pause();
    }

    audioPlayRef.current?.addEventListener('ended', endedEventListener);

    return () => {
      audioPlayRef.current?.removeEventListener('ended', endedEventListener);
    }
  }, [isPlaying, audioPlayRef.current]);

  return (
    <div className={cx("cursor-pointer", className)} onClick={onAudioPlayCick}>
      <audio src={audio} ref={audioPlayRef} />
      {isPlaying ? (
        <PauseIcon className="text-veronica h-[4.6875rem]" />
      ) : (
        <PlayIcon className="text-veronica h-[4.6875rem]" />
      )}
    </div>
  );
};
