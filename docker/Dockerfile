FROM	centos
RUN	yum -y install openssh-server openssh-clients
RUN	useradd remote-user && \
	echo "remote-user:1234" | chpasswd && \
	mkdir -p /home/remote-user/.ssh && \
	chmod 700 /home/remote-user/.ssh 
COPY	remoteKey.pub /home/remote-user/.ssh/authorized_keys
RUN	chmod 600 /home/remote-user/.ssh/authorized_keys
RUN	/usr/libexec/openssh/sshd-keygen rsa && \
	/usr/libexec/openssh/sshd-keygen ecdsa && \
	/usr/libexec/openssh/sshd-keygen ed25519 && \
	/usr/libexec/openssh/sshd-keygen dsa && \
	echo "PubkeyAuthentication yes" >> /etc/ssh/sshd_config
RUN	rm -f /run/nologin
CMD	/usr/sbin/sshd -D
