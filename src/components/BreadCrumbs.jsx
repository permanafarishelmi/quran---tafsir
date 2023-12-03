import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Shimmer from './Shimmer';

const Breadcrumbs = ({ link, loading }) => {
  // Mendapatkan informasi lokasi (path) dari URL saat ini
  const { pathname } = useLocation();

  return (
    // Membuat div dengan class "flex", "gap-2", dan "items-end"
    <div className="flex gap-2 items-end">
      {/* Tautan ke halaman utama */}
      <Link to="/">
        {/* Menambahkan ikon rumah */}
        <i className="fa-solid fa-home" />
        {/* Menambahkan ikon chevron-right jika bukan halaman utama */}
        {link && pathname !== '/' && (
          <i className="fa-solid fa-chevron-right ml-2 scale-75 text-slate-600" />
        )}
      </Link>

      {/* Jika sedang dalam proses loading, tampilkan efek shimmer */}
      {loading ? (
        <Shimmer className="" width={50} height={25} />
      ) : (
        // Jika tidak loading dan terdapat tautan, tampilkan tautan
        link && (
          <Link to={`${link?.path}`} className="text-slate-700 text-sm">
            {/* Menampilkan judul tautan */}
            {link?.title}
          </Link>
        )
      )}
    </div>
  );
};

// Menentukan properti yang diterima oleh komponen Breadcrumbs
Breadcrumbs.propTypes = {
  link: PropTypes.objectOf(PropTypes.any),
  loading: PropTypes.bool,
};

// Menetapkan nilai default untuk properti
Breadcrumbs.defaultProps = {
  link: {},
  loading: false,
};

// Menjadikan komponen Breadcrumbs sebagai komponen yang dapat di-memo
export default React.memo(Breadcrumbs);
