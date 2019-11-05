"""
Exemplo de um módulo python. Contém uma variável chamada minha_variavel,
uma função chamada minha_funcao e uma classe chamada MinhaClasse.
"""

minha_variavel = 0

def minha_funcao():
    """
    Função examplo
    """
    return minha_variavel
    
class MinhaClasse:
    """
    Classe exemplo.
    """

    def __init__(self):
        self.variavel = minha_variavel
        
    def define_variavel(self, novo_valor):
        """
        Define self.varivael para o novo valor
        """
        self.variavel = novo_valor
        
    def pega_variavel(self):
        return self.variavel