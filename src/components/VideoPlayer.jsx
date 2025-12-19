import { useEffect, useRef, useState } from 'react';
import { FiPause, FiPlay, FiMaximize2 } from 'react-icons/fi';
import './VideoPlayer.css';

const formatTime = (s = 0) => {
    const sec = Math.floor(s % 60)
        .toString()
        .padStart(2, '0');
    const min = Math.floor(s / 60)
        .toString()
        .padStart(2, '0');
    return `${min}:${sec}`;
};

const VideoPlayer = ({ src, alt }) => {
    const videoRef = useRef(null);
    const containerRef = useRef(null);
    const [playing, setPlaying] = useState(true);
    const [current, setCurrent] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        const v = videoRef.current;
        if (!v) return;

        v.muted = true; 
        v.loop = true;
        v.playsInline = true;
        v.autoplay = true;

        const playPromise = v.play();
        if (playPromise !== undefined) {
            playPromise
                .then(() => setPlaying(true))
                .catch(() => setPlaying(false));
        }

        const handleTime = () => setCurrent(v.currentTime || 0);
        const handleLoaded = () => setDuration(v.duration || 0);

        v.addEventListener('timeupdate', handleTime);
        v.addEventListener('loadedmetadata', handleLoaded);

        return () => {
            try {
                v.removeEventListener('timeupdate', handleTime);
                v.removeEventListener('loadedmetadata', handleLoaded);
                v.pause();
            } catch (e) {
                // ignore
            }
        };
    }, [src]);

    const togglePlay = () => {
        const v = videoRef.current;
        if (!v) return;
        if (v.paused) {
            v.play();
            setPlaying(true);
        } else {
            v.pause();
            setPlaying(false);
        }
    };

    const handleExpand = async () => {
        const target = containerRef.current || videoRef.current;
        if (!target) return;
        if (target.requestFullscreen) {
            try {
                await target.requestFullscreen();
            } catch (e) {
                // ignore
            }
        } else if (target.webkitRequestFullscreen) {
            target.webkitRequestFullscreen();
        }
    };

    const handleSeek = (e) => {
        const v = videoRef.current;
        if (!v) return;
        const val = parseFloat(e.target.value);
        v.currentTime = val;
        setCurrent(val);
    };

    return (
        <div className="video-player" ref={containerRef}>
            <video
                ref={videoRef}
                src={src}
                className="project-video"
                aria-label={alt}
            />

            <div className="video-overlay" onClick={togglePlay} aria-hidden>
                
            </div>

            <div className="video-controls">
                <button
                    className="video-btn video-play"
                    onClick={(e) => {
                        e.stopPropagation();
                        togglePlay();
                    }}
                    aria-label={playing ? 'Pause video' : 'Play video'}
                >
                    {playing ? <FiPause size={18} /> : <FiPlay size={18} />}
                </button>

                <div className="video-progress">
                    <input
                        type="range"
                        min={0}
                        max={duration || 0}
                        step={0.1}
                        value={current}
                        onChange={handleSeek}
                        aria-label="Seek video"
                    />
                    <div className="video-times">
                        <span className="time-elapsed">{formatTime(current)}</span>
                        <span className="time-divider">/</span>
                        <span className="time-duration">{formatTime(duration)}</span>
                    </div>
                </div>

                <button
                    className="video-btn video-expand"
                    onClick={(e) => {
                        e.stopPropagation();
                        handleExpand();
                    }}
                    aria-label="Expand video"
                >
                    <FiMaximize2 size={18} />
                </button>
            </div>
        </div>
    );
};

export default VideoPlayer;
