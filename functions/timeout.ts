// helper function to simulate timeout
export default async function timeout(durationInMs: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, durationInMs));
}
