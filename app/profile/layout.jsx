import Header from "./Header";

export default function RootLayout({ children }) {
  return (
    <body>
      <Header />
      {children}
    </body>
  );
}
