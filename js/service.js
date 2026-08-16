/*
  Professional service data — single source of truth.

  index.html   renders the counts ("Reviewer for N journals and M conferences")
  service.html renders the full lists.

  Because both read these arrays, the counts on the homepage can never drift out
  of sync with the lists: add an entry here and both pages update.
*/
(function () {
  "use strict";

  window.SERVICE = {
    teaching: [
      "EECS106B/206B - Robotic Manipulation and Interaction (Spring 2020)",
      "EECS106A/206A - Introduction to Robotics (Fall 2019)",
    ],

    journals: [
      "ASME Journal of Dynamic Systems, Measurement, and Control, 2021 - 2025",
      "Automatica, 2022 - 2026",
      "Control Engineering Practice, 2025 - 2026",
      "IEEE Access, 2022 - 2025",
      "IEEE Control Systems Letters (L-CSS), 2023 - 2026",
      "IEEE Open Journal of Control Systems (OJ-CSYS), 2023 - 2025",
      "IEEE Robotics and Automation Letters (RA-L), 2020 - 2026",
      "IEEE Transactions on Automatic Control (TAC), 2021 - 2026",
      "IEEE Transactions on Automation Science and Engineering (T-ASE), 2026",
      "IEEE Transactions on Control of Network Systems (TCNS), 2021 - 2025",
      "IEEE Transactions on Control Systems Technology (T-CST), 2021 - 2026",
      "IEEE Transactions on Industrial Electronics (TIE), 2024 - 2026",
      "IEEE Transactions on Intelligent Transportation Systems (T-ITS), 2024 - 2026",
      "IEEE Transactions on Robotics (T-RO), 2023 - 2026",
      "IEEE Transactions on Systems, Man, and Cybernetics (TSMC), 2026",
      "IEEE/ASME Transactions on Mechatronics (T-Mech), 2022 - 2026",
      "International Journal of Robotics Research (IJRR), 2023 - 2025",
      "International Journal of Robust and Nonlinear Control (RNC), 2023 - 2025",
    ],

    conferences: [
      "AAAI Conference on Artificial Intelligence (AAAI), 2022 - 2024",
      "American Control Conference (ACC), 2023 - 2026",
      "Annual Conference of the IEEE Industrial Electronics Society (IECON), 2023 - 2025",
      "European Control Conference (ECC), 2023 - 2025",
      "IEEE Conference on Control Technology and Applications (CCTA), 2024 - 2025",
      "IEEE Conference on Decision and Control (CDC), 2022 - 2026",
      "IEEE International Conference on Robotics and Automation (ICRA), 2020 - 2026",
      "IEEE International Conference on Unmanned Aircraft Systems (ICUAS), 2020 - 2021",
      "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2021 - 2025",
      "Learning for Dynamics & Control Conference (L4DC), 2023 - 2026",
    ],
  };
})();
