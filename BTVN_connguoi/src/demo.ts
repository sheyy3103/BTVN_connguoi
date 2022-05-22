class ConNguoi{

    ten: string;
    tuoi:number;
    gioi_tinh:number;
    dia_chi: string;
    
    constructor(ten:string,tuoi:number,gioi_tinh:number,dia_chi:string){
        this.ten = ten;
        this.tuoi = tuoi;
        this.gioi_tinh = gioi_tinh;
        this.dia_chi = dia_chi;
    }

    gt():string{
        if (this.gioi_tinh == 1) {
            return "Nam";
        } else if (this.gioi_tinh == 2) {
            return "Nữ";
        } else{
            return "Khác";
        }
    }

    hien_thi_thong_tin(): void{
        var tbody = document.getElementById("tbody-list-people");
        tbody.innerHTML += `
            <tr>
                <td class="text-center">${this.ten}</td>
                <td class="text-center">${this.tuoi}</td>
                <td class="text-center">${this.gt()}</td>
                <td class="text-center">${this.dia_chi}</td>
            </tr>
        `;

    }
    
}

class SinhVien extends ConNguoi {
    msv: string;
    diem_toan: number;
    diem_li: number;
    diem_hoa: number;

    constructor(
        ten: string,
        tuoi: number,
        gioi_tinh: number,
        dia_chi: string,
        msv: string,
        diem_toan: number,
        diem_li: number,
        diem_hoa: number
    ) {
        super(ten, tuoi, gioi_tinh, dia_chi);
        super.gt();
        this.msv = msv;
        this.diem_toan = diem_toan;
        this.diem_li = diem_li;
        this.diem_hoa = diem_hoa;
    }

    diem_tb(): number {
        return (this.diem_toan + this.diem_li + this.diem_hoa) / 3;
    }

    xep_loai(): string {
        let mark_avg = this.diem_tb();

        if (mark_avg < 3.5) {
            return "Kém";
        } else if (mark_avg >= 3.5 && mark_avg < 5) {
            return "Yếu";
        } else if (mark_avg >= 5 && mark_avg < 6.5) {
           return "Trung bình";
        } else if(mark_avg >= 6.5 && mark_avg < 8){
            return "Khá";
        } else{
            return "Giỏi";
        }

    }

    hien_thi_thong_tin_sv(): void {
        var tbody_sv = document.getElementById("tbody-list-student");

        tbody_sv.innerHTML += `
            <tr>
                <td class="text-center">${this.msv}</td>
                <td class="text-center">${this.ten}</td>
                <td class="text-center">${this.tuoi}</td>
                <td class="text-center">${this.gt()}</td>
                <td class="text-center">${this.dia_chi}</td>    
                <td class="text-center">${this.diem_toan}</td>
                <td class="text-center">${this.diem_li}</td>
                <td class="text-center">${this.diem_hoa}</td>
                <td class="text-center">${this.diem_tb().toFixed(1)}</td>
                <td class="text-center">${this.xep_loai()}</td>
            </tr>
        `;
    }
}

class NhanVien extends ConNguoi {
    mnv: string;
    luong_co_ban: number;
    so_ngay_cong: number;

    constructor(
        ten: string,
        tuoi: number,
        gioiTinh: number,
        diaChi: string,
        mnv: string,
        luong_co_ban: number,
        so_ngay_cong: number
    ) {
        super(ten, tuoi, gioiTinh, diaChi);
        super.gt();
        this.mnv = mnv;
        this.luong_co_ban = luong_co_ban;
        this.so_ngay_cong = so_ngay_cong;
    }

    tinh_luong(): number {
        return this.luong_co_ban * this.so_ngay_cong;
    }

    xep_loai_theo_luong(): string {
        var salary = this.tinh_luong();

        if (salary < 8000000) {
            return "Nhân viên";
        } else if (salary >=8000000 && salary < 15000000) {
            return "Trưởng phòng";
        } else if (salary >= 15000000 && salary < 22000000){
            return "Giám đốc";
        } else{
            return "Hội đồng quản trị";
        }
    }

    hien_thi_thong_tin_nv(): void {
        var tbody_nv = document.getElementById("tbody-list-employee");
        tbody_nv.innerHTML += `
            <tr>
                <td class="text-center">${this.mnv}</td>
                <td class="text-center">${this.ten}</td>
                <td class="text-center">${this.tuoi}</td>
                <td class="text-center">${this.gt()}</td>
                <td class="text-center">${this.dia_chi}</td>
                <td class="text-center">${this.luong_co_ban}</td>
                <td class="text-center">${this.so_ngay_cong}</td>
                <td class="text-center">${this.tinh_luong()}</td>
                <td class="text-center">${this.xep_loai_theo_luong()}</td>
            </tr>
        `;
    }
}

var nguoi1 = new ConNguoi('Địch Lệ Nhiệt Ba',30,2,'Tân Cương');
nguoi1.hien_thi_thong_tin();
var nguoi2 = new ConNguoi('Emma Waston',32,2,'London');
nguoi2.hien_thi_thong_tin();
var nguoi3 = new ConNguoi('Fernando Torres',38,1,'Madrid');
nguoi3.hien_thi_thong_tin();
var nguoi4 = new ConNguoi('Leonardo DiCaprio',48,1,'Los Angeles');
nguoi4.hien_thi_thong_tin();

var sv1 = new SinhVien('Đạt',18,1,'Hà Nội','B9255',10,7.5,9.5);
sv1.hien_thi_thong_tin_sv();
var sv2 = new SinhVien('Thiện',18,3,'Hà Nội','B9220',4,6,5.5);
sv2.hien_thi_thong_tin_sv();
var sv3 = new SinhVien('Hậu',18,1,'Hà Nội','B9166',7,8,8);
sv3.hien_thi_thong_tin_sv();
var sv4 = new SinhVien('Yến',18,2,'Hà Nội','B9170',8,8,9.5);
sv4.hien_thi_thong_tin_sv();

var nv1 = new NhanVien('Sheyy',19,1,'Hà Nội','A17',2100000,15);
nv1.hien_thi_thong_tin_nv();
var nv2 = new NhanVien('Alice',25,2,'Bắc Ninh','C20',700000,24);
nv2.hien_thi_thong_tin_nv();
var nv3 =new NhanVien('Max',22,1,'Thanh Hóa','B03',250000,31);
nv3.hien_thi_thong_tin_nv();
var nv4 = new NhanVien('Pisc',29,3,'Hà Nội','Z07',500000,28);
nv4.hien_thi_thong_tin_nv();
