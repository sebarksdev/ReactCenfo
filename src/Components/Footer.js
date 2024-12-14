
export default function Footer() {
  return (
    <footer className="footer fixed-bottom bg-dark" style={{ backgroundColor: '#727986', color: 'white', fontWeight: 'bold',  }}>
      <div className="text-center">
        <div className='text-center p-3' >
          &copy; {new Date().getFullYear()} Derechos:{' '}
          <a style={{ color: 'white', fontWeight: 'bold' }} href='#'>
            admin_centros_dptos@test.com
          </a>
        </div>
      </div>
    </footer>
  );
}