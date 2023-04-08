# ExpressJS

## Daftar Isi
- [1. Pengenalan ExpressJS](#1-pengenalan-expressjs)
  - [1.1. Apa itu ExpressJS?](#11-apa-itu-expressjs)
  - [1.2. Kenapa ExpressJS?](#12-kenapa-expressjs)
- [2. Penggunaan ExpressJS](#2-penggunaan-expressjs)
  - [2.1. Setup ExpressJS](#21-setup-expressjs)
  - [2.2. Pembuatan Server](#22-pembuatan-server)
  - [2.3. Routing](#23-routing)
- [3. Penggunaan Sequelize](#3-penggunaan-sequelize)
  - [3.1 Apa Itu Sequelize?](#31-apa-itu-sequelize)
  - [3.2. Setup Sequelize](#32-setup-sequelize)
  - [3.3. Model dan Migration](#33-model-dan-migration)
  - [3.4. Seeder](#34-seeder)
 - [4. CRUD](#4-crud)
  
## Materi
### 1. Pengenalan ExpressJS
#### 1.1. Apa itu ExpressJS?
<img width="300" alt="Screenshot_20230222_211049" src="https://user-images.githubusercontent.com/87472849/220654257-019df9b7-4585-4aa8-9266-f06ec79dddec.png">
ExpressJS merupakan framework untuk aplikasi Node.JS sebagai framework back end. Untuk itu ExpressJS bertanggung jawab untuk mengatur fungsionalitas website, seperti pengelolaan routing dan session, permintaan HTTP, penanganan error, serta pertukaran data di server. 

#### 1.2. Kenapa ExpressJS?
Seperti yang disebutkan pada laman resmi <a href="https://expressjs.com/">ExpressJS</a>, kelebihannya sebagai berikut:
- Fast
- Unopinionated
- Minimalist

Hal ini dikarenakan ExpressJS memiliki fitur yang minimalis yang membuat framework ini relatif lebih cepat dibanding framework lainnya. 
Selain itu pengguna ExpressJS juga dibebaskan membuat dengan cara apapun karena tidak ada aturan baku dalam penggunaan ExpressJS. 
Fastify membuat perbandingan kecepatan framework NodeJS sebagai berikut <a href="https://www.fastify.io/benchmarks/">Perbandingan ExpressJS dengan Framework Lainnya</a>.
<img width="343" alt="image" src="https://user-images.githubusercontent.com/87472849/220654713-d0b9a5a5-8c02-481a-85fd-c2fdb439f5e0.png">

### 2. Penggunaan ExpressJS
#### 2.1. Setup ExpressJS
1. Buat folder kosong sebagai projek ExpressJS <img width="700" alt="image" src="https://user-images.githubusercontent.com/87472849/220656365-0dd7e2b8-baca-44dd-a0b0-b5daf06c07a2.png">
2. Buka terminal dan inisialisasi NodeJS dengan `npm init`. Isi pertanyaannya atau enter saja hingga proses selesai dan ketik "yes" untuk menyelesaikan proses. Akan muncul `package.json` pada folder projek tersebut. <img width="700" alt="image" src="https://user-images.githubusercontent.com/87472849/220657522-4a871755-fe20-47c9-bc15-d99d7cb31ebe.png">
3. Install ExpressJS ke projek dengan menjalankan perintah `npm install express` di terminal <img width="453" alt="image" src="https://user-images.githubusercontent.com/87472849/220660315-561ae645-4f03-4b8e-a4a4-9e8ca585ea87.png">
4. ExpressJS berhasil diinstall dan siap digunakan

#### 2.2. Pembuatan Server
Kegunaan ExpressJS adalah dapat membuat server. Berikut cara membuat server yang berjalan di local.
1. Buat file JS di projek untuk membuat program server. Import express ke program dengan `require("express")`. <img width="609" alt="image" src="https://user-images.githubusercontent.com/87472849/220661462-c0ba3a36-67b5-4f0a-a204-ae79ff18116c.png">
2. Inisialisasi fungsi express dan port-nya
```js
const app = express();
const port = 3000;
```
3. Gunakan `app` untuk request method HTTP
```js
app.get('/', (req, res) => res.send('Halo, calon admin MCI!'));
```
4. Buat server berjalan dengan port yang diinisialisasi di atas dan beri pesannya
```js
app.listen(port, () => console.log(`Server berjalan di http://localhost:${port}!`));
```
5. Untuk menjalankan file JS tersebut, perlu adanya perintah "start" pada "scripts" di package.json sebagai berikut <img width="396" alt="image" src="https://user-images.githubusercontent.com/87472849/220667152-83f08df1-f290-4391-9589-7b7969b9a50b.png">
6. Jalankan perintah `npm start` di terminal untuk memulai server </br> <img width="407" alt="image" src="https://user-images.githubusercontent.com/87472849/220669202-6f61cc81-bace-4325-9c86-5702f85f753d.png">
7. Jika buka link tersebut di browser, maka akan tampil response sebagai berikut </br> <img width="312" alt="image" src="https://user-images.githubusercontent.com/87472849/220669733-2df13e9e-f166-426d-b55b-fadbae74ebe5.png">

#### 2.3. Routing
Routing dapat dibuat dengan mudah dalam ExpressJS hanya dengan menambahkan method-method yang diinginkan. HTTP memiliki empat macam method yaitu
- Get
- Post
- Put
- Delete

Contoh routing pada aplikasi yang telah dibuat di atas dengan menambahkan sintaks berikut
```js
app.get('/dunia', (req, res) => res.send('Halo, dunia!'));
```
Struktur dalam membuat route sebagai berikut </br>
<img width="400" alt="image" src="https://user-images.githubusercontent.com/87472849/220675504-84445e6b-d958-465e-bb8b-6912aa39d409.png"> </br>

Jika server dijalankan ulang dan buka kembali aplikasinya di localhost, maka kita dapat mengarahkan ke `/dunia` dan akan tampil sebagai berikut </br>
<img width="358" alt="image" src="https://user-images.githubusercontent.com/87472849/220676271-07df3f93-fd6e-419e-8bbf-2872dac20be2.png"> </br>

### 3. Penggunaan Sequelize
#### 3.1 Apa Itu Sequelize?
Apakah Sequelize itu? Sequelize adalah ORM (Object Relational Mapping) untuk NodeJS maupun TypeScript yang dapat digunakan pada Database Oracle, MySQL, MariaDB, SQLite and SQL Server, dan sebagainya. Sequelize diperlukan pada backend NodeJS karena dapat digunakan untuk generate mode, migration, maupun seeder secara otomatis. Selain itu developer juga tidak perlu membuat query sql dalam berinteraksi dengan DB, karena ORM ini dapat berinteraksi dengan berbagai macam jenis DB dalam fungsi atau method yang sama.</br></br>
<img width="870" alt="image" src="https://user-images.githubusercontent.com/87472849/224042280-08ab43d3-5833-4bfc-b4af-6a27a03c96d3.png">

#### 3.2. Setup Sequelize
Dalam menggunakan Sequelize pada projek NodeJS, kita perlu melakukan setup sebagai berikut

1. Install Sequelize. Dalam menginstall Sequelize perlu dilakukan perintah
```
npm install sequelize-cli
```
jika berhasil diinstall akan sebagai berikut </br>
<img width="537" alt="image" src="https://user-images.githubusercontent.com/87472849/224047160-37b325fb-a0dc-4983-adc7-8b108960b28b.png">

2. Inisialisasi. Sequelize perlu diinisialisasi sehingga lakukan perintah berikut
```
npx sequelize init
```
maka akan dihasilkan beberapa folder seperti config, seeders, dan migration </br>
<img width="207" alt="image" src="https://user-images.githubusercontent.com/87472849/224048133-5cff351d-9b71-4a78-985f-00b658a7411e.png">

3. Connect to DB. Agar dapat terhubung ke Database, maka perlu mengubah file config.json sesuai kebutuhan DB kita. </br>
<img width="443" alt="image" src="https://user-images.githubusercontent.com/87472849/224049078-176f574a-bd59-452d-a980-70497a281b79.png">

Jika sudah melakukan langkah-langkah tersebut, maka sequelize sudah dapat digunakan dan dapat terkoneksi ke database yang kita siapkan. Sebagai info tambahan, biasanya file `config.json` akan diubah ke js `config.js` karena variabel koneksi ke DB biasanya hal rahasia dan perlu disimpan ke `.env`. Sehingga config perlu sebagai JS agar dapat melakukan import variabel dari file yang berbeda.

#### 3.3. Model dan Migration
Salah satu kegunaan Sequelize adalah untuk berinteraksi dengan tabel yang ada di database. Untuk melakukan hal tersebut perlu adanya model dan migration. Apakah kedua hal tersebut?
1. Model </br>
Model adalah struktur yang mewakili tabel yang ada di database ke sistem aplikasi. Model ini berisi properti dan hubungan relasi dengan model lainnya. Untuk membuat model dalam sequelize perlu melakukan command di terminal sebagai berikut, contoh kita akan membuat model mahasiswa:
```
npx sequelize model:create --name mahasiswa --attributes nama:string,nrp:string,jurusan:string,umur:integer
```
<img width="706" alt="image" src="https://user-images.githubusercontent.com/87472849/226077792-1e04580a-853d-43b2-956e-6803c7d19def.png">
maka akan tercipta model baru bernama mahasiswa sebagai berikut
<img width="645" alt="image" src="https://user-images.githubusercontent.com/87472849/226077829-e8c391b7-428c-423b-a400-973ce29e1d31.png">

2. Migration </br>
Migration adalah metode untuk membuat tabel baru ke database. Metode ini diperlukan karena perlu adanya standarisasi tabel dalam aplikasi yang sama agar tidak terjadi error. Jika kita membuat model seperti command di atas, maka sequelize akan otomatis membuat migration untuk tabel yang sama dengan model tersebut. Berikut adalah hasil auto generate migration dari model mahasiswa:
<img width="569" alt="image" src="https://user-images.githubusercontent.com/87472849/226082074-41bebdfe-02e7-4781-9002-d0a12b791345.png">

Namun jika kita ingin membuat migration sendiri tanpa membuat model terlebih dahulu, kita dapat melakukan command di terminal sebagai berikut:
```
npx sequelize migration:create --name create-mahasiswa-table
```

Migration di atas sudah dapat digunakan. Untuk melakukan migration, lakukan perintah berikut:
```
npx sequelize db:migrate
```
Perintah tersebut akan menjalankan migration yang sedang pending atau yang belum pernah dijalankan.

Note: Pastikan aplikasi sudah terhubung dengan database agar migration dapat dilakukan. Dan pastikan juga menginstall myql pada project tersebut dengan perintah `npm install mysql2`

<img width="486" alt="image" src="https://user-images.githubusercontent.com/87472849/226084796-3ef05e97-017a-44e1-8f02-4a13eeaf991c.png">

Berikut adalah tabel yang dibuat pada database setelah melakukan migrasi:
<img width="960" alt="image" src="https://user-images.githubusercontent.com/87472849/226084831-08f4956e-dc9e-4d37-9473-ccbf1cd6921e.png">

Dapat dilihat dari gambar di atas, terdapat satu tabel baru yang otomatis dibuat oleh Sequelize yaitu `sequelizemeta`. Tabel ini berisi migrasi apa saja yang telah dilakukan agar jika kita melakukan migrasi lagi maka tidak terjadi duplikasi migrasi.

#### 3.4. Seeder
Seeder adalah metode untuk memasukkan data awal yang diperlukan ke dalam tabel di database. Hal ini diperlukan karena beberapa kasus projek pembuatan aplikasi tidak selalu database dimulai dengan data kosong. Sebagai contoh untuk membuat aplikasi pemesanan tiket kereta api, ketika aplikasi dideploy seharusnya sudah ada data stasiun kereta api tanpa menunggu admin menginputkan data stasiun satu per satu. Untuk itulah seeder diperlukan dalam menginputkan semua data stasiun dengan sekali perintah.

Salah satu fitur Sequelize adalah dapat melakukan seeder. Contoh pada tabel mahasiswa di atas, kita dapat membuat seeder dengan perintah di terminal sebagai berikut:
```
npx sequelize seed:create --name create-seeder-mahasiswa
```

Maka di folder seeders terdapat file baru sebagai berikut:

<img width="664" alt="image" src="https://user-images.githubusercontent.com/87472849/226085373-57a72076-7647-4e4a-b698-5a0ea6c5fa02.png">

File tersebut masih kosong, sehingga kita perlu mengisi fungsi up dengan fungsi insert data mahasiswa yang ingin kita inputkan. Contohnya sebagai berikut:

<img width="353" alt="image" src="https://user-images.githubusercontent.com/87472849/226085507-6a3aba4a-bb3c-456c-b4e5-7b85b8f9ac0a.png">

Untuk menjalankan seeder, kita perlu melakukan perintah di terminal sebagai berikut:
```
npx sequelize db:seed:all
```
Perintah tersebut akan menjalankan semua seeder yang tersedia.

<img width="490" alt="image" src="https://user-images.githubusercontent.com/87472849/226085571-dd41a1eb-cff4-4cef-91cd-9a7443d397d5.png">

Jika kita buka tabel mahasiswa di database, maka data di seeder akan masuk ke tabel sebagai berikut:

<img width="855" alt="image" src="https://user-images.githubusercontent.com/87472849/226085739-cf831032-c97a-48ec-b60a-8f58c62b3398.png">


Berikut merupakan penggunaan Sequelize. Untuk info lengkapnya lakukan perintah berikut maka akan ditampilkan perintah-perintah yang bisa dilakukan oleh Sequelize
```
npx sequelize
```

<img width="516" alt="image" src="https://user-images.githubusercontent.com/87472849/226085869-5da728b4-846c-423f-bda4-7e8e69b21048.png">

### 4. CRUD
Sebagai implementasi aplikasi di Backend yang telah kita buat, maka kita akan membuat CRUD (Create, Read, Update, Delete) dengan data mahasiswa yang telah kita konfigurasikan. CRUD ini kita akan membuat 4 endpoint utama yaitu membaca data mahasiswa, membuat data mahasiswa, mengubah data mahasiswa, dan menghapus data mahasiswa. Sebelum membuat aplikasi CRUD data mahasiswa, kita perlu memahami hal berikut:

#### HTTP Method
Terdapat banyak method pada HTTP, yang umum digunakan ada 4 sebagai berikut:
1. GET  : digunakan untuk meminta data dari sebuah resource di server
2. POST : digunakan untuk mengirimkan data ke server untuk diproses
3. PUT  : digunakan untuk mengirimkan data untuk menggantikan resource yang ada di server
4. DELETE : digunakan untuk menghapus sebuah resource di server
Keempat metode tersebut setidaknya mewakili CRUD yang akan kita buat.

#### Status Code
Status code adalah bagian dari protokol HTTP yang mengindikasikan apakah permintaan HTTP telah berhasil atau tidak. Berikut adalah beberapa macam status code HTTP yang umum digunakan:

- 1xx (Informational): Menunjukkan bahwa permintaan telah diterima dan server sedang memproses permintaan.
- 2xx (Successful): Menunjukkan bahwa permintaan telah berhasil diterima, dipahami, dan dijalankan dengan sukses.
- 3xx (Redirection): Menunjukkan bahwa permintaan tidak berhasil, tetapi masih memungkinkan untuk diproses dengan mengikuti instruksi pengalihan.
- 4xx (Client Error): Menunjukkan bahwa permintaan tidak berhasil karena ada kesalahan dari sisi klien atau pengguna, seperti kesalahan sintaksis atau otorisasi yang tidak valid.
- 5xx (Server Error): Menunjukkan bahwa permintaan tidak berhasil karena ada kesalahan pada server, seperti kegagalan jaringan atau masalah server.

Contoh status code yang umum digunakan adalah:

<img width="630" alt="image" src="https://user-images.githubusercontent.com/87472849/227537397-df933c58-6998-4dca-9d54-b42df1144df1.png">

#### Service Repository Pattern
Service Repository Pattern adalah pola dalam mengimplementasikan aplikasi dengan memecah kasus menjadi 3 fungsi, yaitu:
1. Controller : Tempat dilakukannya request pada endpoint dan memanggil service.
2. Service : Tempat untuk menyimpan business logic dan memanggil repository.
3. Repository : Tempat untuk mengabstraksi query dan model dipanggil disini.

Gambaran pattern untuk Service Repository seperti berikut:

<img width="296" alt="image" src="https://user-images.githubusercontent.com/87472849/227542167-985e2b72-8d06-4b7e-9530-8fb36256cf0f.png">

#### Implementasi
Setelah memahami hal-hal diatas, mak kita akan mengimplementasikan data mahasiswa menjadi aplikasi CRUD. Pertama kita buat folder `app` yang berisi 4 folder, yaitu controllers, services, repositories, dan routes.

<img width="205" alt="image" src="https://user-images.githubusercontent.com/87472849/227543258-d5e3184d-44b1-41dd-a7c9-b86fd1914fa8.png">

Selanjutnya kita dapat memulai membuat endpoint untuk CRUD mahasiswa

1. Get All Mahasiswa

Di endpoint ini kita mengambil data semua mahasiswa. Kita buat file `mahasiswaRepository.js` di folder `repositories` dan berisi kode sebagai berikut:

```js
const {mahasiswa} = require('../../models')
exports.getAllMahasiswa = () => {
    return mahasiswa.findAll()
}
```

<img width="672" alt="image" src="https://user-images.githubusercontent.com/87472849/227555221-d0cc4aa3-2c75-4939-8381-afb912c699c8.png">

Pada kode di atas, kita memanggil model mahasiswa yang berada di folder models. Selanjutnya kita membuat fungsi `getAllMahasiswa()` yang mengambil semua data mahasiswa.

Selanjutnya kita membuat file `mahasiswaService` di folder `services` dan berisi kode sebagai berikut:

```js
const mahasiswaRepository = require('../repositories/mahasiswaRepository');
exports.getAllMahasiswa = async () => {
    try{
        const mahasiswas = mahasiswaRepository.getAllMahasiswa();
        return mahasiswas;
    }
    catch(err){
        throw err;
    }
}
```

Pada kode di atas kita memanggil repository yang telah kita buat. Selanjutnya terdapat pemanggilan exception handler dan memanggil fungsi get all mahasiswa di repository.

Selanjutnya kita membuat file `mahasiswaController.js` pada folder `controllers`. Disini tempat request dan response pada endpoint berlangsung. Kita membuat controller `getAllMahasiswa` sebagai berikut:

```js
const mahasiswaService = require('../services/mahasiswaService')
exports.getAllMahasiswa = (req, res) => {
    mahasiswaService.getAllMahasiswa()
    .then(mahasiswas => {
        res.status(200).json({
            status: 'success',
            message: 'Success get all data mahasiswa',
            data: mahasiswas
        })
    })
    .catch(err => {
        res.status(500).json({
            status: 'error',
            message: 'internal server error',
            data: err
        })
    })
}
```

Pada kode di atas kita memanggil `mahasiswaService` dan menggunakan fungsi di dalamnya yaitu `getAllMahasiswa()`. Terdapat dua response yaitu 200 jika data berhasil diambil dan 500 jika terdapat error pada aplikasi.

Selanjutnya kita perlu memanggil controller tersebut di router. Untuk itu kita perlu membuat file `mahasiswaRouter.js` di folder `routes`. Isi file tersebut sebagai berikut:
```js
const router = require('express').Router();
const mahasiswaController = require('../controllers/mahasiswaController');
router.get('/', mahasiswaController.getAllMahasiswa);
module.exports = router;
```

Dari kode di atas kita memanggil modul router dan memanggil controller `mahasiswaController`. Selanjutnya router ini kita masukkan ke file utama dalam aplikasi yaitu pada `index.js` dengan menambahkan kode berikut:
```js
const mahasiswaRouter = require('./app/routes/mahasiswaRouter');
app.use('/mahasiswa', mahasiswaRouter);
```

Dan akhirnya kita telah membuat endpoint untuk mengambil semua data mahasiswa. Untuk mencobanya kita jalankan server dengan `npm start` dan akses `localhost:3000/mahasiswa`. Maka kita akan mendapatkan hasil sebagai berikut:

<img width="876" alt="image" src="https://user-images.githubusercontent.com/87472849/227555476-586b6c5b-fce8-41bc-92a0-c588ecba7953.png">

Kita juga dapat mengakses endpoint tersebut dengan Postman.

<img width="648" alt="image" src="https://user-images.githubusercontent.com/87472849/227555962-479d70c6-b0ef-4689-ba9c-a5bf8227dd38.png">

2. Create Mahasiswa

Endpoint selanjutnya adalah create data mahasiswa. Proses ini akan sama dengan sebelumnya maka akan jadi sebagai berikut,

file `mahasiswaRepository` pada folder `repositories`, tambahkan baris kode berikut:

```js
exports.createMahasiswa = (data) => {
    return mahasiswa.create(data)
}
```

file `mahasiswaService` pada folder `services`, tambahkan baris kode berikut:
```js
exports.createMahasiswa = async (data) => {
    try{
        const mahasiswa = mahasiswaRepository.createMahasiswa(data);
        return mahasiswa;
    }
    catch(err){
        throw err;
    }
}
```

file `mahasiswaController` pada folder `controllers`, tambahkan baris kode berikut:
```js
exports.createMahasiswa = (req, res) => {
    const data = req.body;
    mahasiswaService.createMahasiswa(data)
    .then(mahasiswa => {
        if(!mahasiswa){
            res.status(400).json({
                status: 'error',
                message: 'Failed create mahasiswa',
                data: mahasiswa
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'Success create mahasiswa',
            data: mahasiswa
        })
    })
    .catch(err => {
        res.status(500).json({
            status: 'error',
            message: 'internal server error',
            data: err
        })
    })
}
```

Selanjutnya kita panggil fungsi createMahasiswa di router mahasiswa dengan menambahkan baris kode berikut:
```js
router.post('/', mahasiswaController.createMahasiswa);
```

Mari kita coba dengan postman untuk membuat data baru. Yang perlu kita lakukan adalah ubah method menjadi POST dan pilih raw > JSON. Dan tulis request seperti berikut:

<img width="527" alt="image" src="https://user-images.githubusercontent.com/87472849/227559133-7080ec4f-3ba1-4264-9275-d2df5ce7e5f6.png">

Mungkin akan error karena kita belum setup JSON pada aplikasi dan cors nya. Untuk itu kita tambahkan baris kode berikut di `index.js` dan jangan lupa untuk install cors `npm install cors`
```js
const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
```

3. Update Mahasiswa
Selanjutnya kita membuat endpoint untuk meng-update data mahasiswa. Sama seperti sebelumnya lakukan cara sebagai berikut,

Di file `mahasiswaRepository.js` pada folder `repositories`, tambahkan baris kode berikut:
```js
exports.updateMahasiswa = (data, nrp) => {
    return mahasiswa.update(data, {
        where: {
            nrp: nrp
        }
    })
}
```

Di file `mahasiswaService.js` pada folder `services`, tambahkan baris kode berikut:
```js
exports.updateMahasiswa = async (data, nrp) => {
    try{
        const mahasiswa = mahasiswaRepository.updateMahasiswa(data, nrp);
        return mahasiswa;
    }
    catch(err){
        throw err;
    }
}
```

Di file `mahasiswaController.js` pada folder `controllers`, tambahkan baris kode berikut:
```js
exports.updateMahasiswa = (req, res) => {
    const data = req.body;
    const nrp = req.params.nrp;
    mahasiswaService.updateMahasiswa(data, nrp)
    .then(mahasiswa => {
        if(!mahasiswa){
            res.status(400).json({
                status: 'error',
                message: 'Failed update mahasiswa',
                data: mahasiswa
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'Success update mahasiswa',
            data: mahasiswa
        })
    })
    .catch(err => {
        res.status(500).json({
            status: 'error',
            message: 'internal server error',
            data: err
        })
    })
}
```

Pada router mahasiswa, tambahkan baris kode berikut:
```js
router.put('/:nrp', mahasiswaController.updateMahasiswa);
```

Untuk mencobanya di Postman, ubah method menjadi PUT dan tambahkan `/{nrp}` setelah mahasiswa pada endpoint tersebut. Masukkan data yang ingin diupdate.

<img width="644" alt="image" src="https://user-images.githubusercontent.com/87472849/227563418-c92d1893-b6d8-4df4-8ae3-b084b884749f.png">

Jika kita lihat data mahasiswa, maka nama Adi akan berubah

<img width="651" alt="image" src="https://user-images.githubusercontent.com/87472849/227563569-60a457bc-9273-4abd-a8dd-8cf414b5a06e.png">


4. Delete Mahasiswa

Selanjutnya kita membuat endpoint keempat yaitu Delete Mahasiswa untuk menghapus data mahasiswa yang diinginkan. Seperti endpoint sebelumnya, lakukan langkah seperti berikut:

Di file `mahasiswaRepository.js` pada folder `repositories`, tambahkan baris kode berikut:
```js
exports.deleteMahasiswa = (nrp) => {
    return mahasiswa.destroy({
        where: {
            nrp: nrp
        }
    })
}
```

Di file `mahasiswaRService.js` pada folder `services`, tambahkan baris kode berikut:
```js
exports.deleteMahasiswa = async (nrp) => {
    try{
        const mahasiswa = mahasiswaRepository.deleteMahasiswa(nrp);
        return mahasiswa;
    }
    catch(err){
        throw err;
    }
}
```

Di file `mahasiswaController.js` pada folder `controllers`, tambahkan baris kode berikut:
```js
exports.deleteMahasiswa = (req, res) => {
    const nrp = req.params.nrp;
    mahasiswaService.deleteMahasiswa(nrp)
    .then(mahasiswa => {
        if(!mahasiswa){
            res.status(400).json({
                status: 'error',
                message: 'Failed delete mahasiswa',
                data: mahasiswa
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'Success delete mahasiswa',
            data: mahasiswa
        })
    })
    .catch(err => {
        res.status(500).json({
            status: 'error',
            message: 'internal server error',
            data: err
        })
    })
}
```

Pada router mahasiswa, tambahkan baris kode berikut:
```js
router.delete('/:nrp', mahasiswaController.deleteMahasiswa);
```

Untuk mencobanya di Postman, ubah method menjadi DELETE dan tambahkan `/{nrp}` setelah mahasiswa pada endpoint tersebut.

<img width="641" alt="image" src="https://user-images.githubusercontent.com/87472849/227567260-6f3a8a91-7b00-437e-b224-6e1e245d46a6.png">

Jika kita cek data get mahasiswa, maka mahasiswa Adi sudah terhapus dari database.

<img width="647" alt="image" src="https://user-images.githubusercontent.com/87472849/227567462-adeaa01d-04fb-4dc8-aa7e-16f63caf42ef.png">


Berikut adalah contoh membuat aplikasi CRUD pada data mahasiswa menggunakan ExpressJS. Dalam projek skala besar akan banyak endpoint yang akan dibuat. Untuk itu perlu adanya dokumentasi dalam penggunakan endpoint-endpoint tersebut. Dokumentasi ini dapat menggunakan Postman yang telah kita contohkan dan dapat juga menggunakan Swagger yang dapat otomatis meng-generate dokumentasi berdasarkan endpoint yang kita buat.


