# Alper Ardıç's  BCFM Academy Study Case


 ## WEBHOOK URL DEĞİŞTİRME İŞLEMİ

   Github hesabında 'Repositories' sekmesine geldiğim zaman Study Case'imin Repositories'ine (rest-api) tıklıyorum ve 'Settings'ten 'Webhook' kısmına tıklıyorum. 
   
  'Add webhook' sekmesine tıkladığım zaman 'Payload Url' kısmının altında bir URL girmemi istiyor. 
   
   Bu sırada https://webhook.site/ sitesine girdiğim zaman ana ekranda 'Your unique URL' başlığı altında bir uzantı karşılıyor bizi. O uzantıyı kopyalayıp github içerisindeki 'Payload URL' kısmına yapıştırıyorum. 
    
   'Content Type' ımı 'application.json' olarak seçiyorum çünkü case'in bizden istediği format bu. Ardından aşağıda karşımıza gelen 'Send me everything' kutusunu işaretleyerek 'Update Webhook' seçeneğini işaretliyorum. 
   
   Bu işlemlerden sonra https://webhook.site/ sitesine girdiğim zaman ana ekranın solunca POST metodu ile alınmış bir webhook görmekteyiz. Bu webhook'un içeriği ise Study Case'imizin reverse API'ı yani webhook'udur.

## DOCKERFİLE İLE BUİLD ALMA İŞLEMİ

   Öncelikle dosya uzantıları arasındaki karışıklığı engellemek için kendi study case repo'mu desktop üzerinde oluşturdum. 
  
   Ardından desktop üzerine gelen C:\Users\Alper\Desktop\rest-api uzantısını Command Prompt'ta base olarak göstererek  
    
     
       node init
     
   
   ile package.json dosyamı ekledim. 
  
   Ardından 'casestudy.js' ismiyle case'de belirtilen şartları sağlayan kod dizinini hazırladım ve /rest-api klasörü içerisine attım. 
   
   Containarize etme işlemini Dockerfile ile yapma kararı aldığım için öncelikle internetten Docker uygulamasını indirdim ve bu sayede PATH'i uygulama sayesinde oluşturmuş oldum (aksi taktirde Command Prompt'ta 'Batch Error' tipi dosya konumunu bulamadığım hatalar aldım). 
    
   Sonraki adımda uzantısız bir 'Dockerfile' dosyası oluşturdum ve Webstorm IDE'si aracılığıyla bu dosyanın dizinini açtım. 
    
   İçerisine dockerize etmemizi sağlayacak olan kod satırlarını ekledim (commit edilmiş hali 'Dockerfile' halinde repo'm da mevcuttur.) 
    
   Ardından build alma işlemini 
   
   
    docker build -t alperdocker .
   
   
   satırı ile tamamladım. 
    
   Buildini aldığım docker'ı
    
    
     docker run -it -p 8888:3000 alperdocker
    
    
   ile çalıştırdım ve casestudy.js dosyamın içerdiği emiri Postman vasıtası ile test ederek API'ımı başarılı bir şekilde çalıştırdığımı farkettim.  


 ## AWS EC2 İLE UBUNTU KULLANARAK HOST ETME
 
   İlk olarak https://aws.amazon.com/ sitesinden üyelik oluşturup gerekli formları doldurduktan sonra EC2 Dashboard'ı altında Instances sekmesinde Launch Instance'a tıklıyorum
   
   Ubuntu Server 18.04 LTS (HVM), SSD Volume Type olarak AMI' ımı seçiyorum. Bu seçenek opsiyonel olup Amazon Linux 2 AMI (HVM), SSD Volume Type kullanmakta yeterli olacaktır.
   
   Ardından istediğimiz Instance Type'ı seçtikten sonra next butonları vasıtasıyla istediğimiz özelliklerde Instance'ımızı launch etmiş oluyoruz.
   
   Sonraki adımda Instances sekmesinden oluşturduğumuzu bulup Connect'e basıp kırmızı ile altı çizilmiş URL'yi kopyalıyoruz.
   
   ![aws](https://user-images.githubusercontent.com/77046207/112444255-e5fdf480-8d5e-11eb-9dec-cbbe77c6d182.png)

