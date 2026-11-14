---
title: Omnidirectional Robot with UR5 Arm
order: 130
featured: true
youtube: https://youtu.be/qoDo5TzVyWU
links:
- label: GitHub
  url: https://github.com/aswathselvam/enpm662_final_project
---
A 6-DOF arm can manipulate objects in SE(3) (translation + rotation), but one constraint remains: the arm's reachability. Omnidirectional wheeled mobile robots can move in any direction in the XY plane, allowing more freedom than non-holonomic car-like robots. Combining the two gives a high-DOF arm with unlimited reach in the XY plane, useful for warehouse operations and agricultural tasks.

**Technical approach**

- **Arm:** inverse kinematics using the pseudo-inverse Jacobian.
- **Base:** wheel angular velocities by inverting the forward transformation from the base frame to the wheel frames, with PID feedback control on position error.
