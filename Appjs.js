import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const App = () => {
  const [isLoginScreen, setIsLoginScreen] = useState(true);
  const [isPasswordRecoveryScreen, setIsPasswordRecoveryScreen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isTicketPurchaseScreen, setIsTicketPurchaseScreen] = useState(false);

  const toggleScreen = () => {
    setIsLoginScreen(!isLoginScreen);
    setIsPasswordRecoveryScreen(false);
    setIsTicketPurchaseScreen(false);
  };

  const togglePasswordRecovery = () => {
    setIsLoginScreen(false);
    setIsPasswordRecoveryScreen(!isPasswordRecoveryScreen);
    setIsTicketPurchaseScreen(false);
  };

  const handleLogin = () => {
    // login
    setIsLoggedIn(true);
    setIsTicketPurchaseScreen(true);
  };

  const handleSignup = () => {
    // cadastro
    setIsLoggedIn(true);
    setIsTicketPurchaseScreen(true);
  };

  const handlePasswordRecovery = () => {
    // resetar senha
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsTicketPurchaseScreen(false);
  };

  const handleTicketPurchase = () => {
    // ação ao comprar ingresso
    // redirecionar para outra tela
  };

  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        isTicketPurchaseScreen ? (
          <View>
            <Text style={styles.title}>Compra de Ingresso</Text>
            <View style={styles.movieOption}>
              <Text style={styles.movieTitle}>Avatar</Text>
              <Text style={styles.movieSynopsis}>Após formar uma família, Jake Sully e Ney'tiri fazem de tudo para ficarem juntos. No entanto, eles devem sair de casa e explorar as regiões de Pandora quando uma antiga ameaça ressurge, e Jake deve travar uma guerra difícil contra os humanos</Text>
              <Button title="Comprar" onPress={handleTicketPurchase} />
            </View>
            <View style={styles.movieOption}>
              <Text style={styles.movieTitle}>Vingadores</Text>
              <Text style={styles.movieSynopsis}>Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz, logo reúne os únicos super-heróis que serão capazes de defender a Terra de ameaças sem precedentes. Homem de Ferro, Capitão América, Hulk, Thor, Viúva Negra e Gavião Arqueiro formam o time dos sonhos de Fury, mas eles precisam aprender a colocar os egos de lado e agir como um grupo em prol da humanidade.</Text>
              <Button title="Comprar" onPress={handleTicketPurchase} />
            </View>
            <Button title="Logout" onPress={handleLogout} />
          </View>
        ) : (
          <View>
            <Text style={styles.title}>Dashboard</Text>
            <Button title="Logout" onPress={handleLogout} />
          </View>
        )
      ) : isPasswordRecoveryScreen ? (
        <View>
          <Text style={styles.title}>Recuperação de Senha</Text>
          <TextInput placeholder="E-mail" style={styles.input} />
          <Button title="Recuperar Senha" onPress={handlePasswordRecovery} />
          <Text style={styles.toggleText}>
            Lembrado(a) da senha?{' '}
            <Text style={styles.toggleLink} onPress={toggleScreen}>
              Faça login
            </Text>
          </Text>
        </View>
      ) : (
        <View>
          <Text style={styles.title}>Tela de Login</Text>
          <TextInput placeholder="E-mail" style={styles.input} />
          <TextInput placeholder="Senha" secureTextEntry style={styles.input} />
          <Button title="Login" onPress={handleLogin} />
          <Text style={styles.toggleText}>
            Não possui uma conta?{' '}
            <Text style={styles.toggleLink} onPress={toggleScreen}>
              Cadastre-se
            </Text>
          </Text>
          <Text style={styles.toggleText}>
            Esqueceu sua senha?{' '}
            <Text style={styles.toggleLink} onPress={togglePasswordRecovery}>
              Recupere aqui
            </Text>
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  toggleText: {
    marginTop: 20,
    textAlign: 'center',
  },
  toggleLink: {
    color: 'blue',
  },
  movieOption: {
    marginBottom: 20,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  movieSynopsis: {
    marginBottom: 10,
  },
});

export default App;
