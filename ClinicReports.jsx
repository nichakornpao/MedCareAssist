import React from "react";
import { getPatientStatus } from "../../shared/patientState";

export default function ClinicReports() {
  const status = getPatientStatus();

  return (
    <main className="container dashboard">
      <section className="page-header">
        <div>
          <h1 className="page-title">รายงานสำหรับคลินิก / โรงพยาบาล</h1>
          <p className="page-sub">
            ข้อมูลสรุปจากการใช้ระบบเตือนการใช้ยาและบันทึกอาการรายวัน
          </p>
        </div>
      </section>

      <section className="card">
        <h3>สรุปสถานะล่าสุด</h3>
        <p>กินยาล่าสุด: {status.lastMedTakenAt || "ไม่มีข้อมูล"}</p>
        <p>อาการล่าสุด: {status.lastSymptom || "ไม่มีข้อมูล"}</p>
      </section>

      {/* ตรงนี้ยูจะต่อยอดเป็นสรุปย้อนหลัง / กราฟ ฯลฯ ได้ */}
    </main>
  );
}
