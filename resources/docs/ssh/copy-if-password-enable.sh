cat ~/.ssh/id_rsa.pub | ssh hiepxanh@awread.vn 'cat >> .ssh/authorized_keys && echo "Key copied"'