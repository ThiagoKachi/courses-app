export interface Course {
  capa:        string;
  codigo:      string;
  id:          string;
  informacoes: Infos;
  numeracao:   string;
  professores: string[];
  sinopse:     string;
  titulo:      string;
}

export interface Infos {
  duracao:      string;
  responsavel:  string;
  publicacao:   string;
  idioma:       string;
  certificacao: boolean;
}

export interface Teacher {
  id: string;
  nome: string;
  sobrenome: string;
}