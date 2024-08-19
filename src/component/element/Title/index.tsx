type Props = {
  children: React.ReactNode;
};

export async function Title({ children }: Props) {
  return <h1 className="mb-4 text-center text-3xl font-bold lg:mb-8 lg:text-4xl">{children}</h1>;
}
