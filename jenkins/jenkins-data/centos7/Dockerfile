FROM	centos
RUN	yum -y update && yum -y upgrade 
RUN	yum -y install openssh-server openssh-clients
RUN	useradd remote_user && \
	echo "remote_user:1234" | chpasswd && \
	mkdir -p /home/remote_user/.ssh && \
	chmod 700 /home/remote_user/.ssh 
COPY	remoteKey.pub /home/remote_user/.ssh/authorized_keys
RUN	chmod 600 /home/remote_user/.ssh/authorized_keys
RUN	/usr/libexec/openssh/sshd-keygen rsa && \
	/usr/libexec/openssh/sshd-keygen ecdsa && \
	/usr/libexec/openssh/sshd-keygen ed25519 && \
	/usr/libexec/openssh/sshd-keygen dsa && \
	echo "PubkeyAuthentication yes" >> /etc/ssh/sshd_config
RUN	rm -f /run/nologin
RUN	chown --recursive remote_user:remote_user /home/remote_user
RUN	yum -y install mysql unzip
RUN	curl "https://d1vvhvl2y92vvt.cloudfront.net/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && \
	unzip awscliv2.zip && \
	./aws/install
CMD	/usr/sbin/sshd -D

