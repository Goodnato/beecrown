import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner tc = new Scanner(System.in);

        float n1, n2, media, X = 1;

        while (X == 1) {
            while (true) {
                n1 = tc.nextFloat();

                if (n1 >= 0 && n1 <= 10) {
                    break;
                } else {
                    System.out.println("nota invalida");
                }
            }

            while (true) {
                n2 = tc.nextFloat();

                if (n2 >= 0 && n2 <= 10) {
                    break;
                } else {
                    System.out.println("nota invalida");
                }
            }

            media = (n1 + n2) / 2;
            System.out.printf("media = %.2f\n", media);

            while (true) {
                System.out.println("novo calculo (1-sim 2-nao)");
                X = tc.nextInt();
                if (X == 1 || X == 2) {
                    break;
                }
            }
        }
    }
}