import React, { useRef, useState } from 'react';

export default function TeamVideoSection() {
  const [playingState, setPlayingState] = useState({
    video2: false,
    video1: false,
    video3: false
  });

  const [mutedState, setMutedState] = useState({
    video2: true,
    video1: true,
    video3: true
  });

  const videoRefs = {
    video2: useRef(null),
    video1: useRef(null),
    video3: useRef(null)
  };

  const handleStartPlay = (id) => {
    const video = videoRefs[id]?.current;
    if (!video) return;

    video.play().then(() => {
      setPlayingState(prev => ({ ...prev, [id]: true }));
    }).catch(err => {
      console.warn('Playback error:', err);
    });
  };

  const handleToggleMute = (e, id) => {
    e.stopPropagation();
    const video = videoRefs[id]?.current;
    if (!video) return;

    const newMuted = !video.muted;
    video.muted = newMuted;
    setMutedState(prev => ({ ...prev, [id]: newMuted }));
  };

  const handleVideoEnded = (id) => {
    setPlayingState(prev => ({ ...prev, [id]: false }));
  };

  return (
    <section className="team-video-section section-pad" id="team-operations">
      <div className="container">
        {/* Section Header */}
        <div className="section-head reveal-on-scroll">
          <div>
            <span className="section-number">OUR TEAM & OPERATIONS</span>
            <h2>
              Behind Every Ton:<br />
              <span>Our Skilled Team & Plant in Action.</span>
            </h2>
          </div>
          <p>
            Experience our manufacturing prowess firsthand. From raw attapulgite mineral handling to high-precision processing and export packaging, see our dedicated team delivering consistent quality at every step.
          </p>
        </div>

        {/* 3-Video Showcase Grid */}
        <div className="team-video-grid reveal-on-scroll">
          
          {/* Left Video: video2.mp4 */}
          <div className="team-video-card side-card">
            <div className="video-wrapper">
              <video
                ref={videoRefs.video2}
                src="/videos/video2.mp4"
                playsInline
                preload="metadata"
                controls
                muted={mutedState.video2}
                onPlay={() => setPlayingState(prev => ({ ...prev, video2: true }))}
                onPause={() => setPlayingState(prev => ({ ...prev, video2: false }))}
                onEnded={() => handleVideoEnded('video2')}
              >
                <source src="/videos/video2.mp4" type="video/mp4" />
                <source src="/video2.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>

              {/* Floating Quick Action Overlay */}
              {!playingState.video2 && (
                <div
                  className="video-play-overlay"
                  onClick={() => handleStartPlay('video2')}
                  role="button"
                  tabIndex={0}
                  aria-label="Play Mineral Sourcing & Sorting Video"
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleStartPlay('video2'); }}
                >
                  <div className="play-pulse-circle">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                      <polygon points="5,3 19,12 5,21" />
                    </svg>
                  </div>
                  <span className="play-overlay-text">Watch Video</span>
                </div>
              )}

              <button
                type="button"
                className="video-audio-toggle"
                onClick={(e) => handleToggleMute(e, 'video2')}
                aria-label={mutedState.video2 ? "Unmute audio" : "Mute audio"}
                title={mutedState.video2 ? "Click to unmute" : "Click to mute"}
              >
                {mutedState.video2 ? (
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="1" y1="1" x2="23" y2="23" />
                    <polygon points="9 9 9 15 13 15 17 19 17 5 13 9 9 9" fill="currentColor" stroke="none" />
                    <path d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="9 9 9 15 13 15 17 19 17 5 13 9 9 9" fill="currentColor" stroke="none" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                )}
              </button>

              <span className="video-step-tag">STAGE 01</span>
            </div>

            <div className="video-card-info">
              <div className="video-card-header">
                <span className="video-pill-badge">Raw Feed Prep</span>
                <h3>Mineral Sourcing & Sorting</h3>
              </div>
              <p>
                Our field team manages careful ore selection, grading, and uniform crushing before entering the processing circuit.
              </p>
            </div>
          </div>

          {/* Center Video: video1.mp4 (Spotlight Featured) */}
          <div className="team-video-card center-card featured-card">
            <div className="featured-crown-badge">
              <span className="star-icon">★</span>
              <span>CORE OPERATIONS & TEAM</span>
            </div>

            <div className="video-wrapper main-wrapper">
              <video
                ref={videoRefs.video1}
                src="/videos/video1.mp4"
                playsInline
                preload="metadata"
                controls
                muted={mutedState.video1}
                onPlay={() => setPlayingState(prev => ({ ...prev, video1: true }))}
                onPause={() => setPlayingState(prev => ({ ...prev, video1: false }))}
                onEnded={() => handleVideoEnded('video1')}
              >
                <source src="/videos/video1.mp4" type="video/mp4" />
                <source src="/video1.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>

              {!playingState.video1 && (
                <div
                  className="video-play-overlay"
                  onClick={() => handleStartPlay('video1')}
                  role="button"
                  tabIndex={0}
                  aria-label="Play Core Team & Plant Showcase Video"
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleStartPlay('video1'); }}
                >
                  <div className="play-pulse-circle spotlight-pulse">
                    <svg viewBox="0 0 24 24" width="34" height="34" fill="currentColor">
                      <polygon points="5,3 19,12 5,21" />
                    </svg>
                  </div>
                  <span className="play-overlay-text spotlight-text">Play Team & Plant Showcase</span>
                </div>
              )}

              <button
                type="button"
                className="video-audio-toggle"
                onClick={(e) => handleToggleMute(e, 'video1')}
                aria-label={mutedState.video1 ? "Unmute audio" : "Mute audio"}
                title={mutedState.video1 ? "Click to unmute" : "Click to mute"}
              >
                {mutedState.video1 ? (
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="1" y1="1" x2="23" y2="23" />
                    <polygon points="9 9 9 15 13 15 17 19 17 5 13 9 9 9" fill="currentColor" stroke="none" />
                    <path d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="9 9 9 15 13 15 17 19 17 5 13 9 9 9" fill="currentColor" stroke="none" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                )}
              </button>

              <span className="video-step-tag spotlight-tag">MAIN SHOWCASE</span>
            </div>

            <div className="video-card-info spotlight-info">
              <div className="video-card-header">
                <span className="video-pill-badge active-badge">Primary Processing</span>
                <h3>Active Plant Operations & Dedicated Team</h3>
              </div>
              <p>
                Continuous thermal activation, live parameter testing, and real-time coordination by our technical team to guarantee standard batch rheology.
              </p>
            </div>
          </div>

          {/* Right Video: video3.mp4 */}
          <div className="team-video-card side-card">
            <div className="video-wrapper">
              <video
                ref={videoRefs.video3}
                src="/videos/video3.mp4"
                playsInline
                preload="metadata"
                controls
                muted={mutedState.video3}
                onPlay={() => setPlayingState(prev => ({ ...prev, video3: true }))}
                onPause={() => setPlayingState(prev => ({ ...prev, video3: false }))}
                onEnded={() => handleVideoEnded('video3')}
              >
                <source src="/videos/video3.mp4" type="video/mp4" />
                <source src="/video3.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>

              {!playingState.video3 && (
                <div
                  className="video-play-overlay"
                  onClick={() => handleStartPlay('video3')}
                  role="button"
                  tabIndex={0}
                  aria-label="Play Milling, Packaging & Dispatch Video"
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleStartPlay('video3'); }}
                >
                  <div className="play-pulse-circle">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                      <polygon points="5,3 19,12 5,21" />
                    </svg>
                  </div>
                  <span className="play-overlay-text">Watch Video</span>
                </div>
              )}

              <button
                type="button"
                className="video-audio-toggle"
                onClick={(e) => handleToggleMute(e, 'video3')}
                aria-label={mutedState.video3 ? "Unmute audio" : "Mute audio"}
                title={mutedState.video3 ? "Click to unmute" : "Click to mute"}
              >
                {mutedState.video3 ? (
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="1" y1="1" x2="23" y2="23" />
                    <polygon points="9 9 9 15 13 15 17 19 17 5 13 9 9 9" fill="currentColor" stroke="none" />
                    <path d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="9 9 9 15 13 15 17 19 17 5 13 9 9 9" fill="currentColor" stroke="none" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                )}
              </button>

              <span className="video-step-tag">STAGE 03</span>
            </div>

            <div className="video-card-info">
              <div className="video-card-header">
                <span className="video-pill-badge">Precision Finishing</span>
                <h3>Milling, Packaging & Dispatch</h3>
              </div>
              <p>
                Controlled micronizing to exact mesh sizes, followed by mechanized moisture-proof HDPE bagging and export containerization.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
