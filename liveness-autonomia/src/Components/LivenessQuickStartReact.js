import React from 'react';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsconfig from '../aws-exports'; // Arquivo de configuração do Amplify
import { FaceLivenessDetector } from '@aws-amplify/ui-react-liveness';
import { Loader, ThemeProvider } from '@aws-amplify/ui-react';

// Configuração do Amplify com base no awsconfig
Amplify.configure(awsconfig);

export function LivenessQuickStartReact() {
  const [loading, setLoading] = React.useState(true);
  const [createLivenessApiData, setCreateLivenessApiData] =
    React.useState(null);

  React.useEffect(() => {
    const fetchCreateLiveness = async () => {
      /*
       * Chamada simulada ao backend para obter sessionId.
       * Você pode substituir isso pela chamada real à API de criação de sessão.
       */
      const response = await fetch(
        'https://g26n02smri.execute-api.eu-north-1.amazonaws.com/dev/createLivenessSession'
      );
      const data = await response.json();
      setCreateLivenessApiData(data);
      setLoading(false);
    };

    fetchCreateLiveness();
  }, []);

  const handleAnalysisComplete = async () => {
    /*
     * Substitua pela lógica real para obter o resultado da sessão.
     */
    try {
      const response = await fetch(
        `https://g26n02smri.execute-api.eu-north-1.amazonaws.com/dev/getLivenessSessionResult?sessionId=${createLivenessApiData.sessionId}`
      );
      const data = await response.json();

      /*
       * Nota: O `isLive` deve ser determinado pelo backend com base no score retornado.
       */
      if (data.isLive) {
        console.log('Usuário está vivo');
      } else {
        console.log('Usuário não está vivo');
      }
    } catch (error) {
      console.error('Erro ao obter o resultado da análise:', error);
    }
  };

  return (
    <ThemeProvider>
      {loading ? (
        <Loader />
      ) : (
        <FaceLivenessDetector
          sessionId={createLivenessApiData.sessionId}
          region="eu-north-1"
          onAnalysisComplete={handleAnalysisComplete}
          onError={(error) => {
            console.error('Erro no detector de vivacidade:', error);
          }}
        />
      )}
    </ThemeProvider>
  );
}
