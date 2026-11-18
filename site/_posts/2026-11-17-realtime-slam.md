---
title: Realtime Simultaneous Localization and Mapping - on Pixel phone
date: 2026-11-17
excerpt: 'A realtime SLAM demo: tracking the camera while mapping the scene.'
tags: [SLAM, computer vision, robotics]
---

<button class="yt-lite" type="button" data-yt="BLBZ_y-_ksw" aria-label="Play video: Realtime Simultaneous Localization and Mapping - on Pixel phone">
  <img src="https://i.ytimg.com/vi/BLBZ_y-_ksw/hqdefault.jpg" alt="" loading="lazy" width="480" height="360">
  <span class="yt-lite__play" aria-hidden="true"></span>
</button>

Simultaneous Localization and Mapping (SLAM) answers two questions at once: *where is the camera?* and *what does the world around it look like?* This demo runs both in realtime.

## How it works

1. **Feature tracking:** detect keypoints in each incoming frame and match them against the previous frames.
2. **Pose estimation:** estimate the camera motion from the matched features.
3. **Mapping:** triangulate the matched features into 3D landmarks and add them to the map.
4. **Optimization:** refine the camera poses and landmarks together to reduce accumulated drift.

The result is a camera trajectory and a sparse 3D map, built frame by frame as the video plays.
