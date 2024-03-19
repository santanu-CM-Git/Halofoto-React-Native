const StaticText = {
    site_title:`HaloFoto`,
    screen: {
        login: {
            heading: `Selamat Datang!`,
            form: {
                email: `Alamat Email / Nomor Telepon Seluler`,
                password: `Kata Sandi`,
                chk_stay_login: `Tetap Terhubung`,
                forgot_password: `Lupa Sandi`,
                qry_new_account: `Belum punya akun?`,
            }
        },
        logout: {
            heading: `Kamu Telah Berhasil Keluar Dari Akun!`
        },
        register: {
            heading: `Buat Akun`,
            form: {
                name: `Nama`,
                email: `Email`,
                password: `Kata Sandi`,
                country_code: `Kode Negara`,
                phone: `Nomor Handphone`,
                gender: `Jenis Kelamin`,
                male: `Pria`,
                female: `Wanita`,
                dob: `Tanggal Lahir`,
                address_line1: `Alamat`,
                country: `Negara`,
                state: `Provinsi`,
                city: `Kota`,
                insta: `Username Instagram`,
                tamron_user: `Pengguna Tamron`
            },
            success_heading: 'Selamat',
            success_text: 'Akun anda sudah B dibuat. Silahkan masuk untuk mengakses halaman utama',

        },

        forgot_password: {
            heading: `Lupa Kata Sandi`,
            form: {
                country_code: `Kode Negara`,
                phone: `Nomor Handphone`,
            },
        },

        reset_password: {
            heading: `Buat ulang kata sandi`,
            form: {
                new_password: `Kata sandi baru`,
                confirm_password: `Konfirmasi kata sandi`,
            },
            success_heading: 'Berhasil',
            success_text: 'Kata sandi anda sudah berhasil diperbarui. Silahkan gunakan kata sandi baru untuk masuk',
        },

        otp_verification: {
            heading: `Vertifikasi OTP`,
            sub_heading: `Mohon masukkan kode verifikasi`,
            timer_alert: `Sisa waktu`,
            timer_alert_unit: `Detik`,
            resend_otp: `Tidak menerima?`,

        },
        check_referrer: {
            heading: `Kode referensi`,
            form: {
                heading: `Masukkan kode referal`,
                code: `Masukkan Kode`,
                disclaimer: `Anda dapat memasukkan kode referral nanti jika anda mau, tetapi kode referral harus dimasukkan sebelum registrasi produk pertama anda`
            }

        },
        welcome: {
            heading: `Selamat Datang!`,
            content: `Terima kasih sudah mendaftar di applikasi kami. Nikmati keuntungan mendapatkan poin yang dapat ditukarkan dengan barang-barang menarik di aplikasi kami`,
        },
        dashboard: {
            header: {
                point: `Poin`,
                hello: `Hello`
            },
            tabs: {
                my_product: `Produk Saya`,
                coupon: `Kupon`,
                redemption_center: `Penukaran Hadiah`,
                product_catalog: `Katalog Produk`,
                halo_foto_story: ` HaloFoto Story`,
                review_center: `Ulasan`,
                my_points: `Poin Saya`,
                news: `Berita`,
                message: `Pesan`,
            }
        },

        warranty: {
            navigation_prev: `Pendaftaran Garansi`,
            navigation_next: `Berikutnya`,

            qr_screen: {
                heading: `PINDAI BARCODE`,
                content: `PINDAI BARCODE dari kemasan produk Anda`,
            },

            step_1: {
                heading: `Langkah 1 : Pendaftaran`,
                content: `Silahkan isi informasi berikut untuk mendapatkan garansi elektronik`,
                form: {
                    model_no: `Model Number`,
                    serial_no: `Serial Number`,
                    purchase_date: `Tangal Pembelian`,
                    seller_name: `Nama Toko`,
                    info: `Syarat dan ketentuan berlaku untuk garansi produk ini`,
                }
            },
            step_2: {
                heading: `Langkah 2 : Pendaftaran`,
                content: `Pastikan foto yang Anda ambil sudah benar agar dapat disetujui.`,
                form: {
                    text: `atau`,
                    info: `Ukuran file maksimum 2MB`,
                    file_size_error: `File lebih dari 2MB`
                }
            },
            step_3: {
                waiting: {
                    heading: `Terima Kasih!`,
                    content: `Tim kami akan mengulas dokumen anda. Kami akan memberikan notifikasi ketika sudah diterima.`,
                },
                success: {
                    heading: `Selamat!`,
                    content: `Anda telah  berhasil mendapatkan poin dengan mendaftarkan produk Anda.`,
                    point: `Poin`,
                },
            }
        },

        e_repair: {
            content: {
                subject: `Subjek`,
                message: `Pesan`,
            }
        },

        my_product_list: {
            heading: `Produk Saya`,
            content: {
                sn: `SN`,
                expiry_date: `Berlaku hingga`,
                certificate: `Sertifikat`,
                bill: `Tagihan`,
                video: `Video`,
                e_repair: `E-repair`,
                no_product: {
                    heading: `Tidak ada produk yang didaftarkan`,
                    content: ``,
                }
            }
        },
        my_product_details: {
            heading: `Product Details`,
            content: {
                heading: `Informasi Teknis`,
                sn: `SN`,
                expiry_date: `Berlaku hingga`,
                certificate: `Sertifikat`,
                bill: `Tagihan`,
                video: `Video`,
                e_repair: `E-repair`,
                review: `Ulasan`,
                details: `Detail`,
                certificate: `Sertifikat`,
                md: `MD`,
                model: `Model`,
                purchase_date: `Tanggal Pembelian`,
                expiry_date: `Tanggal Kadaluarsa`,
                mobile_number: `Nomor ponsel terdaftar`,
                user_name: `Pengguna Terdaftar`,
                specification: `Spesifikasi`,
                focal_length: `Focal Length`,
                max_aperture: `Maximum Aperture`,
                angle_of_view: `Angle of View`,
                optical_construction: `Optical Construction`,
            }
        },

        product_catelog: {
            heading: `Katalog Produk`,
            content: {
                heading_hot_deal: `Penawaran Terbaik`,
                deal_list_heading: `Penawaran Terbaik`,
                price: `Harga`,
                original_price: `Harga asli`,
                selling_price: `Harga jual`,
                model: `Model`,
            }
        },

        product_details: {
            heading: `Rincian Produk`,
            content: {
                heading: `Informasi Teknis`,
                video: `Video`,
                review: `Ulasan`,
                details: `Detail`,
                md: `MD`,
                model: `Model`,
                specification: `Spesifikasi`,
                focal_length: `Focal Length`,
                max_aperture: `Maximum Aperture`,
                angle_of_view: `Angle of View`,
                optical_construction: `Optical Construction`,

                min_object_distance: `Minimum Object Distance`,
                max_magnification_ratio: `Maximum Magnification Ratio`,
                filter_size: `Filter Size`,
                max_diameter: `Max Diameter`,
                length: `Length`,
                weight: `Weight`,
                aperture_blades: `Aperture Blades`,
                min_aperture: `Minimum Aperture`,
                img_stabilization_performance: `Image Stabilization Performance`,
                standard_accessories: `Standard Accessories`,
                compatible_mounts: `Compatible Mounts`,
                additional_info: `Informasi Tambahan`
            }
        },

        follow_us: {
            heading: `Ikuti Kami`,
            tabs: {
                follow_us: `Ikuti Kami di Facebook`,
                follow_us2: `Hubungi Kami di Whatsapp`,
                follow_us3: `Ikuti Kami di Instagram`,
                check_website: `Lihat situs web kami`,
                contact_hotline: `Hubungi hotline kami`,
                dealer_locator: `Lokasi Dealer`,
                authorized_center: `Pusat Layanan Resmi`,

            }
        },
        settings: {
            heading: `Pengaturan`,
            tabs: {
                settings: `Notifikasi`,
                sound: `Suara`,
                terms_and_condition: `Syarat dan Ketentuan`,
                privacy_policy: `Kebijakan Privasi`,
                software_license:`Software License`
            },
            notification_txt:`Klik di sini untuk menyesuaikan cara Anda menerima notifikasi aplikasi`,
            tracks:{
                track_1:{
                    label:`Shutter Sound`,
                },
                track_2:{
                    label:`Correct answer reward`,
                },
                track_3:{
                    label:`Game notification wave alarm`,
                },
            }
        },
        about_us: {
            heading: `Tentang Kami`,
        },
        review: {
            heading: `Ulasan`,
            content: {
                model: `Model`,
                review: `Ulasan`,
            }
        },
        review_details: {
            heading: `Pusat Ulasan`,
            content: {
                sn: `SN`,
                rate: `Nilai produk ini`,
            }
        },

        news: {
            heading: `Daftar Berita`,
            category: {
                heading: `Jelajahi`,
            }
        },
        news_details: {
            heading: `berita`,
            recent_news: {
                heading: `Berita lain yang mungkin Anda suka`
            }
        },
        story_list: {
            heading: `Untuk anda`,
            heading_1: `Untuk anda`,
            nav_heading: `Untuk anda`

        },
        story_details: {
            heading: `Halofoto Stories`,
        },
        my_profile: {
            heading: `Profil Saya`,
            heading_new: `Poin Saya`,
            content: {
                id: `ID`,
                history: `Riwayat`,
                earn_more_points: `Poin Tambahan`,
                my_profile_details: `Profil Saya`,
                change_password: `Ganti Kata Sandi`,
                invite_friend: `Undang Teman`,
                logout: `Keluar`,
                download_helofoto: `Unduh HaloFoto`,
                referral_code: `Kode Referal`,
                delete: `Hapus akun`
            }
        },
        my_profile_detail: {
            heading: `Detail Profil Saya`,
        },
        manage_password: {
            heading: `Kelola Kata Sandi`,
            form: {
                password: `Kata Sandi`,
                new_password: `Kata Sandi Baru`,
                confirm_password: `Konfirmasi Kata Sandi`,
            }
        },

        redemption_centre: {
            heading: `Pusat Penukaran`,
            content: {
                points: `Poin`,
                validity: `Berlaku hingga`,
                used: `Digunakan pada`,
                expired: 'Kadaluarsa pada',
                earn_points: 'Dapatkan lebih banyak poin',
                register_product: 'Daftarkan produk Anda',
                invite_friends: 'Undang Teman'
            }
        },

        redemption_detail: {
            heading: `Penukaran Poin`,
            content: {
                redeem: `Menukarkan`,
                point: `Poin`,
                total_point: `Jumlah poin Anda`,
                success_text: `Ditambahkan ke laman kupon Anda`
            }
        },
        voucher: {
            heading: `Kupon`,
            history: `Riwayat`,
            content: {
                points: `Poin`,
                validity: `Berlaku hingga`,

            }
        },
        voucher_details: {
            heading: `Vouchers`,
            content: {
                points: `poin`,
                validity: `Berlaku hingga`,
                total_point: `Jumlah poin Anda`,
                hide_code: `Sembunyikan kode kupon`,
                see_code: `Lihat kode kupon`,
                heading: `Nomor kode Anda`,
                valid_until: 'Berlaku hingga'

            }
        },
        no_content_page: {
            heading: `Konten tidak ditemukan`,
            content: `Konten tidak ditemukan`
        },
        message_list: {
            heading: `Pesan`,
            content: {
                heading_hot_deal: `Penawaran Terbaik`,
                deal_list_heading: `Penawaran Terbaik`,
                price: `Harga`,
                original_price: `Harga asli`,
                selling_price: `Harga jual`,
                model: `Model`,
            }
        },

    },

    modal: {
        country_ext_code: {
            search: {
                placeholder: `Cari berdasarkan Negara`,
            }
        },

        model_no: {
            search: {
                placeholder: `Cari berdasarkan Model Number`,
            }
        },
        product_type: {
            camera_type: `Tipe Kamera`,
            filter: `Filter`,
            mount: `Mount`,
            select_all: `Pilih Semua`,
            lense_category: `Kategori Lensa`
        },
        message_list: {
            category: `Kategori Pesan Masuk`,
            date: `Tanggal`,
            day_filter1: `30 hari terakhir`,
            day_filter2: `10 hari terakhir`
        }

    },

    navigation: {

    },

    validation: {

    },

    success: {
        text: ``
    },

    alert: {
        error_heading: 'Error !',
        error: `Bagian ini harus diisi`,
        error_password_length: `Kata sandi minimal 8 karakter`,
        error_phone_ext_length: `Silahkan pilih kode negara`,
        error_phone_length: `Dibutuhkan minimal 5 digit`,
        otp_time_out: `OTP kaladuarsa. Mohon kirimkan kembali OTP`,
        error_invalied_otp: `OTP tidak valid`,
        download_start: `Mengunduh`,
        download_complete: `Selesai Mengunduh`,
        download_permission: `Berikan izin untuk mengunduh`,
        no_video_found: `Tidak ada video yang tersedia untuk produk ini`,
        no_invoice_found: `Faktur tidak tersedia saat ini`,
        review_submit_success: `Ulasan telah berhasil dikirim`,
        record_update_success: `Rekaman telah berhasil diperbarui`,
        upload_limit_error: `Ukuran file maksimum 2MB`,
        copy_clipboard_success: `Disalin`,
        otp_invalid:`OTP is not Verified!`,
    },

    axios: {
        error: `Ada yang salah. Silahkan coba lagi`,
    },

    button: {
        get_started: `Memulai`,
        login: `Masuk`,
        sign_up: `Daftar`,
        ok: `Ok`,
        cancel: `Batalkan`,
        retry: `Coba Lagi`,
        next: `Buat Akun`,
        review: `Mengatur Ulang`,
        //use_filter: `Gunakan Filter`,
        reset: `Reset`,
        use_filter: `Pilih Filter`,
        resend_otp: `Mengirimkan ulang kode OTP`,
        skip: `Lewati`,
        insert: `Masukkan`,
        take_photo: `Ambil Gambar Invoice`,
        download_gallery: `Unduh dari Galeri`,
        send: `Kirim`,
        close: `Tutup`,
        product_registration: `Daftarkan Produk Anda`,
        submit_review: `Kirimkan Ulasan`,
        edit_review: `Sunting`,
        update_profile: `Simpan Perubahan`,
        update_password: `Perbaharui Kata Sandi`,
        manual_registration_warranty: `Pendaftaran Garansi Manual`,
        change_point: `Ubah Poin`,
        submit: `Ulasan`


    },
    currency: `Rp`
}

export default StaticText