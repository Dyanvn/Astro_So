// src/pages/Numerology.js
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../services/firebase';
import { calculateLifePathNumber } from '../utils/calculateNumerology';
import ResultChart from '../components/ResultChart';

const numerologyMeanings = {
  1: 'Số 1: Người lãnh đạo, độc lập, sáng tạo.',
  2: 'Số 2: Người hòa giải, nhạy cảm, hợp tác.',
  3: 'Số 3: Người giao tiếp, sáng tạo, vui vẻ.',
  4: 'Số 4: Người xây dựng, ổn định, thực tế.',
  5: 'Số 5: Người tự do, phiêu lưu, linh hoạt.',
  6: 'Số 6: Người chăm sóc, yêu thương, trách nhiệm.',
  7: 'Số 7: Người tìm kiếm sự thật, sâu sắc, tâm linh.',
  8: 'Số 8: Người quyền lực, tham vọng, thành công.',
  9: 'Số 9: Người nhân đạo, từ bi, lý tưởng.',
  11: 'Số 11: Số master, trực giác mạnh, truyền cảm hứng.',
  22: 'Số 22: Số master, người xây dựng vĩ đại, thực hiện ước mơ lớn.'
};

function Numerology() {
  const [fullName, setFullName] = useState('');
  const [commonName, setCommonName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [birthPlace, setBirthPlace] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'UserInput'), {
        fullName,
        commonName,
        birthDate,
        gender,
        birthPlace,
        timestamp: new Date()
      });

      const lifePathNumber = calculateLifePathNumber(birthDate);
      const meaning = numerologyMeanings[lifePathNumber];

      setResult({
        lifePathNumber,
        meaning
      });
    } catch (err) {
      setError('Lỗi: ' + err.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Tra cứu Thần số học</h2>
      {error && <p className="text-danger">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Họ và tên khai sinh</label>
          <input
            type="text"
            className="form-control"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tên thường dùng (nếu có)</label>
          <input
            type="text"
            className="form-control"
            value={commonName}
            onChange={(e) => setCommonName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Ngày/tháng/năm sinh</label>
          <input
            type="date"
            className="form-control"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Giới tính</label>
          <select
            className="form-control"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Chọn giới tính</option>
            <option value="Nam">Nam</option>
            <option value="Nữ">Nữ</option>
            <option value="Khác">Khác</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Nơi sinh</label>
          <input
            type="text"
            className="form-control"
            value={birthPlace}
            onChange={(e) => setBirthPlace(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Tra cứu</button>
      </form>

      {result && (
        <div className="mt-4">
          <h3>Kết quả</h3>
          <p><strong>Số chủ đạo:</strong> {result.lifePathNumber}</p>
          <p><strong>Ý nghĩa:</strong> {result.meaning}</p>
          <div className="mt-4">
            <ResultChart lifePathNumber={result.lifePathNumber} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Numerology;