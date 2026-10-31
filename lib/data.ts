export interface ProjectLink {
  label: string;
  url: string;
}

export interface Artifact {
  index: string;
  year: string;
  title: string;
  field: string;
  summary: string;
  metric?: {
    label: string;
    value: string;
  };
  details: string;
  stack: string[];
  links: ProjectLink[];
}

export const PROFILE = {
  name: "Ilya Emelyanov",
  alias: "Kanterville Ghost",
  status: "CS @ BIT",
  location: "Beijing, China",
  bioMain: "Between mathematics & machines.",
  bioSub:
    "Undergraduate researcher at Beijing Institute of Technology. Exploring inductive priors in low-data regimes, distribution-free conformal calibration, and value-based reinforcement learning.",
  links: [
    {
      label: "GitHub",
      value: "github.com/nsdmlk",
      url: "https://github.com/nsdmlk",
    },
    {
      label: "ORCID",
      value: "0009-0002-6802-7544",
      url: "https://orcid.org/0009-0002-6802-7544",
    },
    {
      label: "Telegram",
      value: "t.me/KantervilleGhost",
      url: "https://t.me/KantervilleGhost",
    },
  ],
};

export const ARTIFACTS: Artifact[] = [
  {
    index: "01",
    year: "2026",
    title: "SmallGBM",
    field: "Tree-Based Learning",
    summary: "Gradient boosting for small datasets with a zero-dependency C core.",
    metric: {
      label: "ROC-AUC",
      value: "0.9101",
    },
    details:
      "Tuned histogram binning and bespoke split regularization designed to prevent tree-level variance collapse on sample sizes where XGBoost/LightGBM overfit.",
    stack: ["C99", "Python", "Cython", "PyPI"],
    links: [
      { label: "GitHub", url: "https://github.com/nsdmlk/smallgbm" },
      { label: "PyPI", url: "https://pypi.org/project/smallgbm/" },
      { label: "Best-of-BIT's", url: "https://github.com/YDX-2147483647/best-of-bits" },
    ],
  },
  {
    index: "02",
    year: "2026",
    title: "SmallMLP",
    field: "Uncertainty Quantification",
    summary: "Adaptive multilayer perceptron with split conformal prediction.",
    metric: {
      label: "Benchmark",
      value: "25/45 wins",
    },
    details:
      "Architecture pairing inductive tabular priors with distribution-free conformal inference. Guarantees finite-sample coverage intervals for safety-critical predictions.",
    stack: ["PyTorch", "Conformal Prediction", "PyPI"],
    links: [
      { label: "GitHub", url: "https://github.com/nsdmlk/smallmlp" },
      { label: "PyPI", url: "https://pypi.org/project/smallmlp/" },
      { label: "Best-of-BIT's", url: "https://github.com/YDX-2147483647/best-of-bits" },
    ],
  },
  {
    index: "03",
    year: "2026",
    title: "RL-from-scratch",
    field: "Sequential Optimization",
    summary: "First-principles implementation of value-based RL algorithms.",
    metric: {
      label: "Focus",
      value: "DQN · DDQN",
    },
    details:
      "Pedagogical and mathematically rigorous decomposition of temporal difference errors, non-stationary target divergence, and experience replay dynamics.",
    stack: ["Python", "NumPy", "Gymnasium"],
    links: [
      { label: "GitHub", url: "https://github.com/nsdmlk/rl-from-scratch" },
    ],
  },
];