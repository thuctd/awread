create user: useradd -m -s /bin/bash quyenluong97
set password: passwd quyenluong97
add root: usermod -aG sudo quyenluong97
view role: id quyenluong97
switch user: su - quyenluong97
test command with sudo from new user: sudo ls -la /root

view list user: cat /etc/group
