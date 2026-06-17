export const contactData = {
  info: {
    title: "Hubungi Saya.",
    description: "Punya proyek atau ingin berkolaborasi? Jangan ragu untuk menghubungi saya melalui formulir atau metode kontak langsung.",
    methods: [
      {
        id: "email",
        title: "Email",
        value: "mr1401.ridwan@gmail.com",
        icon: "mdi:email-outline",
        bgClass: "bg-indigo-100 text-indigo-600"
      },
      {
        id: "location",
        title: "Lokasi",
        value: "Bandung, Indonesia",
        icon: "mdi:location-on-outline",
        bgClass: "bg-pink-100 text-pink-600"
      }
    ]
  },
  form: {
    note: "Untuk mendapatkan respons yang lebih cepat terkait proyek Anda, harap ingat untuk menyertakan username Telegram Anda di dalam kolom pesan di bawah.",
    labels: {
      name: "Nama Lengkap",
      email: "Alamat Email",
      message: "Pesan"
    },
    placeholders: {
      name: "Masukkan nama Anda",
      email: "nama@email.com",
      message: "Ceritakan tentang proyek atau ide Anda..."
    },
    buttons: {
      send: "Kirim Pesan",
      sending: "Mengirim..."
    },
    messages: {
      success: "Pesan berhasil dikirim ke Telegram!",
      failed: "Gagal mengirim pesan. Coba lagi nanti."
    }
  }
};