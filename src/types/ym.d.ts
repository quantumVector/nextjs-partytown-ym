declare global {
  function ym(
    counterId: number,
    event: "reachGoal" | string,
    target: string,
    params?: Record<string, unknown>
  ): void;
}

export {};
