# analise um dia da semana
dia = "feriado"
# se esse dia for domingo
if dia == "domingo"  # == é uma comparação
  almoco = "Hoje nosso almoço será especial"
elsif dia == "feriado"
  almoco = "Talvez hoje será especial"
else
  almoco = "Almoço normal"
end
# imprima que o nosso almoço será especial
puts almoco