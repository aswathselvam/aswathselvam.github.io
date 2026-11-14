---
title: Ground-Plane Free-Space Segmentation for Autonomous Robots
order: 160
featured: true
youtube: https://youtu.be/aQgTL-L6xbQ
links:
- label: GitHub
  url: https://github.com/aswathselvam/Potholes
---
Using a 128×128 RGB image to predict the free space on the ground for a wheeled mobile robot navigating its environment.

- **Neural network:** a small U-Net trained on a custom dataset, with an inference time of 7 ms.
- **Classical vision (2 ms, shown in the video):**
  1. Sample points near the robot and segment the image.
  2. Track the points across frames with optical flow and compute a homography.
  3. Filter out points that do not follow the homography of the points closest to the robot.
  4. Remove segments with a low density of points.
