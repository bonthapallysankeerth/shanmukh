import Navbar from './Navbar';
import Footer from './Footer';
import FloatingActions from './FloatingActions';

export default function Layout({ children }) {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-content">{children}</main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
