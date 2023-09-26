export const CANVAS_CONFIG = {
  CELL_SIZE: 32,
  GRID_COLOR: "#333",
  BACKGROUND_COLOR: "#000",
  ID: "polygon"
};
export const STAGE_THRESHOLDS = {
  STAGE2_ACTIVATION: 2000,
  STAGE3_STAGE1_ACTIVATION: 15000,
  STAGE3_STAGE2_ACTIVATION: 20000
};
export const STAGE_DISABLED_HEIGHT = 10;

export const CANVAS_CACHE: { [id: string]: fabric.Canvas } = {};
