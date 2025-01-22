import smtplib
from email.mime.text import MIMEText

# 發送郵件的憑證
username = "ziyiw1930@gmil.com"
password = "vkzz ljdj caxz zhss"

# 建立郵件內容
msg = MIMEText("這是一封測試郵件")
msg["Subject"] = "測試郵件"
msg["From"] = username
msg["To"] = "ziyiw1930@gmail.com"

# 設定 SMTP 伺服器
try:
    server = smtplib.SMTP("smtp.gmail.com", 587)
    server.starttls()
    server.login(username, password)
    server.sendmail(username, ["收件者的郵件地址"], msg.as_string())
    server.quit()
    print("郵件發送成功")
except Exception as e:
    print(f"郵件發送失敗: {e}")