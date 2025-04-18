import CardComponent from "@/component/atom/card";
import { Box, Button, List, ListItem, Typography } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Home() {
  return (
   <>
   <div className="flex w-screen h-screen items-center bg-black/80">
      <Box display={"flex"} sx={{padding:3}} gap={2} justifyContent={"center"} flexDirection={"column"}>
        <Typography variant="h1" fontWeight={800} color="warning">RADEX DIGITAL</Typography>
        <Typography variant="h5" className="text-white" fontWeight={600}>
           Jasa Penyedia Pembuatan Website
        </Typography>
        <Box display={"flex"} gap={2}>
          <Button color="warning" variant="contained" sx={{padding:2}} size="large">Tentang Kami</Button>
          <Button color="warning" variant="outlined" sx={{padding:2}} size="large">Kontak</Button>
        </Box>
      </Box>
      </div>
      <div className="bg-black/80">
  <Box
    display="flex"
    mx="auto"
    sx={{
      padding: { xs: 2, sm: 3, md: 4 },
      backgroundColor: "#121212",
      maxWidth: "100%",
    }}
    className="rounded-md"
    flexDirection="column"
    alignItems="center"
    textAlign="center"
  >
    <Typography
      variant="h1"
      color="warning"
      className="text-white"
      sx={{
        fontSize: { xs: 24, sm: 30, md: 40 },
        fontWeight: 600,
        mb: 2,
      }}
    >
      Tentang Kami
    </Typography>

    <Typography variant="h6" className="text-white" sx={{ mb: 2 }}>
      Visi dan Misi RADEX Digital:
    </Typography>

    {/* Visi */}
    <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
      <Typography
        fontWeight={800}
        fontSize={{ xs: 20, sm: 24, md: 30 }}
        color="warning"
        mb={1}
      >
        Visi
      </Typography>
      <Typography
        fontSize={{ xs: 14, sm: 16, md: 20 }}
        maxWidth="800px"
        px={2}
        className="text-white"
      >
        Menjadi pemimpin dalam inovasi teknologi digital, memberikan solusi
        yang cepat, efektif, dan berkualitas tinggi untuk memenuhi kebutuhan
        pelanggan dan meningkatkan efisiensi operasional.
      </Typography>
    </Box>

    {/* Misi */}
    <Typography
      fontWeight={800}
      fontSize={{ xs: 20, sm: 24, md: 30 }}
      color="warning"
      mb={1}
    >
      Misi
    </Typography>
    <List sx={{ maxWidth: "800px", mx: "auto", px: 2 }}>
      {[
        "Mengembangkan solusi teknologi digital yang inovatif: Menciptakan produk dan layanan yang memenuhi kebutuhan pelanggan dan meningkatkan kualitas hidup.",
        "Meningkatkan efisiensi operasional: Menggunakan teknologi untuk meningkatkan produktivitas dan efisiensi operasional, sehingga meningkatkan kepuasan pelanggan.",
        "Membangun tim yang profesional dan berdedikasi: Menciptakan lingkungan kerja yang kondusif dan mendukung pengembangan keterampilan tim.",
        "Meningkatkan kepuasan pelanggan: Memberikan layanan yang berkualitas tinggi dan responsif terhadap kebutuhan pelanggan.",
        "Mengikuti perkembangan teknologi terbaru: Terus memantau dan mengadopsi teknologi terbaru untuk meningkatkan kualitas produk dan layanan.",
      ].map((text, idx) => (
        <ListItem key={idx}>
          <Typography
            fontSize={{ xs: 14, sm: 16, md: 18 }}
            className="text-white"
          >
            {idx + 1}. {text}
          </Typography>
        </ListItem>
      ))}
    </List>

    {/* Penutup */}
    <Typography
      fontSize={{ xs: 14, sm: 16, md: 20 }}
      maxWidth="800px"
      mt={2}
      px={2}
      className="text-white"
    >
      Dengan visi dan misi ini, RADEX Digital dapat menjadi tim IT yang inovatif
      dan efektif dalam memberikan solusi teknologi digital yang berkualitas
      tinggi.
    </Typography>
  </Box>
</div>


<div className="bg-black/80">
        <Box color={"white"} padding={5}>
          <Typography mx={4} color="warning" fontSize={30} fontWeight={800}>Projects</Typography>
          <Typography mx={4}>Berikut adalah projects projects yang pernah kami bangun</Typography>
          <Box my={8} display="grid" gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={4}>
  {[
      "https://i.pinimg.com/736x/08/b9/2e/08b92e97e5091107e3fde23a3fa6d09a.jpg",
      "https://i.pinimg.com/736x/08/b9/2e/08b92e97e5091107e3fde23a3fa6d09a.jpg",
      "https://i.pinimg.com/736x/08/b9/2e/08b92e97e5091107e3fde23a3fa6d09a.jpg",
      "https://i.pinimg.com/736x/08/b9/2e/08b92e97e5091107e3fde23a3fa6d09a.jpg",
      "https://i.pinimg.com/736x/08/b9/2e/08b92e97e5091107e3fde23a3fa6d09a.jpg",
      "https://i.pinimg.com/736x/08/b9/2e/08b92e97e5091107e3fde23a3fa6d09a.jpg",
      "https://i.pinimg.com/736x/08/b9/2e/08b92e97e5091107e3fde23a3fa6d09a.jpg",
      "https://i.pinimg.com/736x/08/b9/2e/08b92e97e5091107e3fde23a3fa6d09a.jpg",
      "https://i.pinimg.com/736x/08/b9/2e/08b92e97e5091107e3fde23a3fa6d09a.jpg"
    ].map((item, index) => (
     <div key={index}>
        <CardComponent media={item} unknown={"Unknown"} description={"lorem"} />
      </div>
    ))}
    </Box>
  </Box>
      </div>
    <div className="bg-black/80 text-center w-screen">
    <Box color={"white"}>
      <Typography variant="h5" fontWeight={600}>Hubungi Kami</Typography>
      <Button color="success" size="large" variant="contained" startIcon={<WhatsAppIcon/>}>Whatsapp</Button>
    </Box>
    </div>
   </>
  );
}
