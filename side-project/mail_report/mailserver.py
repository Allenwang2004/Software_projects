import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime

#設定SMTP伺服器
smtpserver = 'smtp.gmail.com'
smtp_port = 587

email_user = 'ziyiw1930@gmil.com'
email_password = 'vkzz ljdj caxz zhss'
email_to = 'ziyiw1930@gmail.com'

#建立郵件
def send_daily_report():
    msg = MIMEMultipart()
    msg['From'] = email_user
    msg['To'] = email_to
    msg['Subject'] = '每日報告 ' + str(datetime.now().date())

    body = '這是每日報告'
    msg.attach(MIMEText(body, 'plain'))

    try:
        server = smtplib.SMTP(smtpserver, smtp_port)
        server.starttls()
        server.login(email_user, email_password)
        text = msg.as_string()
        server.sendmail(email_user, email_to, text)
        server.quit()
        print('郵件已寄出')
    except Exception as e:
        print('郵件寄送失敗')
        print(e)

if __name__ == '__main__':
    send_daily_report()