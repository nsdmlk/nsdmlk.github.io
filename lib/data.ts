export interface ProjectLink {
  label: "GitHub" | "PyPI" | "PRs" | "Best-of-BIT's" | "ORCID" | "Telegram";
  url: string;
}

export interface Project {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  metric?: {
    label: string;
    value: string;
  };
  tags: string[];
  year: string;
  note?: string;
  links: ProjectLink[];
}

export interface SocialLink {
  label: string;
  handle: string;
  url: string;
}

export const PROFILE = {
  name: "Ilya Emelyanov",
  alias: "nsdmlk",
  role: "ML Engineer | Researcher",
  institution: "Beijing Institute of Technology (BIT)",
  bioPrefix: "Between",
  bioHighlight: "mathematics & machines.",
  bioBody:
    "CS student at BIT. I research small-sample learning, conformal prediction, and reinforcement learning.",
  socials: [
    {
      label: "GitHub",
      handle: "@nsdmlk",
      url: "https://github.com/nsdmlk",
    },
    {
      label: "ORCID",
      handle: "0009-0002-6802-7544",
      url: "https://orcid.org/0009-0002-6802-7544",
    },
    {
      label: "Telegram",
      handle: "@KantervilleGhost",
      url: "https://t.me/KantervilleGhost",
    },
  ] satisfies SocialLink[],
};

export const PROJECTS: Project[] = [
  {
    id: "smallgbm",
    index: "01",
    title: "SmallGBM",
    subtitle: "Gradient boosting for small datasets",
    description:
      "Lightweight gradient boosted decision trees engineered from scratch with a zero-dependency C core and Python bindings. Tuned specifically to prevent overfitting on low-sample tabular regimes.",
    metric: {
      label: "ROC-AUC",
      value: "0.9101",
    },
    tags: ["C99", "Python", "PyPI", "Tabular ML"],
    year: "2026",
    note: " Hand-rolled histogram binning & tree splits in pure C.",
    links: [
      { label: "GitHub", url: "https://github.com/nsdmlk/smallgbm" },
      { label: "PyPI", url: "https://pypi.org/project/smallgbm/" },
      { label: "Best-of-BIT's", url: "https://github.com/YDX-2147483647/best-of-bits" },
    ],
  },
  {
    id: "smallmlp",
    index: "02",
    title: "SmallMLP",
    subtitle: "Adaptive MLP with conformal prediction",
    description:
      "Neural architecture tailored for tabular small-sample regimes with built-in distribution-free uncertainty quantification via split conformal prediction.",
    metric: {
      label: "Benchmark",
      value: "25/45 wins",
    },
    tags: ["PyTorch", "Conformal Prediction", "PyPI"],
    year: "2026",
    note: "Guaranteed finite-sample coverage without distributional assumptions.",
    links: [
      { label: "GitHub", url: "https://github.com/nsdmlk/smallmlp" },
      { label: "PyPI", url: "https://pypi.org/project/smallmlp/" },
      { label: "Best-of-BIT's", url: "https://github.com/YDX-2147483647/best-of-bits" },
    ],
  },
  {
    id: "rl-from-scratch",
    index: "03",
    title: "RL-from-scratch",
    subtitle: "Value-based RL from first principles",
    description:
      "Clean, mathematically transparent implementations of Deep Q-Networks (DQN) and Double DQN. Built to dissect Bellman backups, target network stability, and replay buffer dynamics without heavy framework abstractions.",
    tags: ["Python", "RL", "DQN", "Double DQN"],
    year: "2025",
    note: "No black-box wrappers — pure math-to-code translation.",
    links: [
      { label: "GitHub", url: "https://github.com/nsdmlk/rl-from-scratch" },
    ],
  },
];