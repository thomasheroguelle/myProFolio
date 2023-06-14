class test {
    public static void main(String[] args) {
        int user = 5;
        if (user < 18) {
            System.out.println("vous êtes mineur");
        }
        else if (user > 18 && user <= 26) {
            System.out.println("vous êtes jeune");
        }
        else if (user > 26) {
             System.out.println("vous êtes trop vieux");
        }
        else {
             System.out.println("majeur ok");

        }
    }

}