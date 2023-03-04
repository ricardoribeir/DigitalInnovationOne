# 1) saída de dados na tela --> aparecer um comando na tela
# usuário digita seu nome
print "Digite seu nome: "

# 2) programa permite que o usuário preencha o que foi pedido
# gets.chomp
nome = gets.chomp

print "Digite seu sobrenome: "
sobrenome = gets.chomp

# 3) saída final
# para chamar um dado #{variável}
puts "Oi #{nome} #{sobrenome}!"