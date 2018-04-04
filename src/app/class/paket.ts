import {ItemContent} from './item-content';
export class Paket {
    _id: string;
    company: String;
    pengirim: String;
    asal: String;
    agen: String;
    penerima: String;
    tujuan: String;
    tanggal: Date;
    biayakirim: Number;
    biayatambahan: Number;
    projectId: String;
    status: String;
    islunas: Boolean;
    details: ItemContent[];
}
