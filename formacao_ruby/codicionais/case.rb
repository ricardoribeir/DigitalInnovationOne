# utilizado quando se pretende usar muitos if's

# o usuário vai entrar com mês de nascimento dele

# analisar diversos CASOS

# permitir que o usuario entre com esse dado

puts "Digite seu mês de nascimento"
mes = gets.chomp.to_i

# definir casos
case mes
  when 1..3     # .. quer dizer o intervalo entre o começo e fim
    puts "Você nasceu no primeiro trimestre do ano"

  when 4..6
    puts "Você nasceu no segundo trimestre do ano"

  when 7..9
    puts "Você nasceu no terceiro trimestre do ano"

  when 10..12
    puts "Você nasceu no segundoo trimestre do ano"

  else
    puts "Valor digitado inválido"
end
