module.exports = {
  APPLICATION_ID:
    process.env.APPLICATION_ID ||
    "dd2982a83153330f5421418854f0664eb83a24b598f4858e6c119f6d2abfae5f",
  SECRET:
    process.env.SECRET ||
    "8ba3d8a0cc98aac0771a4be6dda5722a3250718ef4eab821d6c634135fbd8a10",
  CALLBACK_URL:
    process.env.CALLBACK_URL || "http://localhost:3000"
};
